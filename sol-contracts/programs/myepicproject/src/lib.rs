use anchor_lang::prelude::*;

declare_id!("DByFcag9yDLwRGnBCT8bJpJPM7akth4dpHXosf7eaB7s");

#[program]
pub mod myepicproject {
  use super::*;
  
  pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> Result<()> {
    let base_account = &mut ctx.accounts.base_account;

    base_account.total_gifs = 0;

    Ok(())
  }

  pub fn add_gif(ctx: Context<AddGif>, gif_link: String) -> Result<()> {
    let base_account = &mut ctx.accounts.base_account; 
    let user = &mut ctx.accounts.user; 

    let item = ItemStruct {
      gif_link: gif_link.to_string(),
      user_address: *user.to_account_info().key,
      votes: Vec::new(),
    };

    base_account.gif_list.push(item);
    base_account.total_gifs += 1;

    Ok(())
  }

  pub fn vote_gif(ctx: Context<VoteGif>, gif_link: String) -> Result<()> {
    let base_account = &mut ctx.accounts.base_account; 
    let user = &mut ctx.accounts.user; 

    let index = base_account.gif_list.iter().position(|item| item.gif_link.to_string() == gif_link).unwrap();
    let target_item = &mut base_account.gif_list[index];

    let target_vote = VoteStruct {
      user_address: *user.to_account_info().key,
      value: 1,
    };

    target_item.votes.push(target_vote);

    Ok(())
  }
}

#[derive(Accounts)]
pub struct StartStuffOff<'info> {
  #[account(init, payer = user, space = 10000)]
  pub base_account: Account<'info, BaseAccount>,

  #[account(mut)]
  pub user: Signer<'info>,
  pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AddGif<'info> {
  #[account(mut)]
  pub base_account: Account<'info, BaseAccount>,

  #[account(mut)]
  pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct VoteGif<'info> {
  #[account(mut)]
  pub base_account: Account<'info, BaseAccount>,

  pub user: Signer<'info>,
}

// #[derive(Accounts)]
// pub struct Donation<'info> {
//   account_a: AccountInfo<'info>,
//   account_b: AccountInfo<'info>,
// }

#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct VoteStruct {
  pub user_address: Pubkey,
  pub value: u32,
}

#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct ItemStruct {
  pub gif_link: String,
  pub user_address: Pubkey,
  pub votes: Vec<VoteStruct>,
}

#[account]
pub struct BaseAccount {
  pub total_gifs: u64,
  pub gif_list: Vec<ItemStruct>,
}
