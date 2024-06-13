import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  article = {
    "status": "ok",
    "totalResults": 33,
    "articles": [
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Michelle Boorstein",
        "title": "Southern Baptist effort to fully ban women pastors is narrowly rejected - The Washington Post",
        "description": "Earlier, representatives narrowly rejected a ban on women serving in lesser pastoral roles. It gained 61% of the vote but needed two-thirds approval.",
        "url": "https://www.washingtonpost.com/nation/2024/06/12/southern-baptists-ivf-women-pastors/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RPIKWGGZ3WB2E3HPAZW7WQRKM4.jpg&w=1440",
        "publishedAt": "2024-06-12T18:23:44Z",
        "content": "The Southern Baptist Convention on Wednesday approved a measure opposing in vitro fertilization as dehumanizing and asking the government to restrain the practice, a sign of the broadening effort by … [+7881 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Jeff Cox",
        "title": "Fed holds rates steady, indicates only one cut coming this year - CNBC",
        "description": "The Federal Reserve on Wednesday released its decision on interest rates following this week's policy meeting.",
        "url": "https://www.cnbc.com/2024/06/12/fed-meeting-today-on-interest-rate.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107409037-17145892582024-05-01t184544z_1052945606_rc2uh7a3ktmz_rtrmadp_0_usa-economy-fed.jpeg?v=1714589292&w=1920&h=1080",
        "publishedAt": "2024-06-12T18:00:08Z",
        "content": "The Federal Reserve on Wednesday kept its key interest rate unchanged and signaled that just one cut is expected before the end of the year.\r\nWith markets hoping for a more accommodative central bank… [+4597 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "David K. Li, Brooke Glatz",
        "title": "Jerry West, NBA legend, dies at age 86 - NBC News",
        "description": "NBA legend Jerry West, whose prolific playing career landed him on the league's logo and basketball savvy led to multiple championships, died on Wednesday, the Los Angeles Clippers said.",
        "url": "https://www.nbcnews.com/news/sports/jerry-west-nba-legend-dies-86-rcna156732",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240612-jerry-west-lakers-mn-1015-9b35f8.jpg",
        "publishedAt": "2024-06-12T17:45:52Z",
        "content": "NBA legend Jerry West, whose prolific playing career landed him on the league's logo and basketball savvy led to multiple championships, died on Wednesday, the Los Angeles Clippers said.\r\nThe 86-year… [+5579 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Mansee Khurana",
        "title": "Alito, Roberts recordings obtained “in service of reaching a greater truth,” filmmaker says - NPR",
        "description": "NPR's Steve Inskeep asks filmmaker Lauren Windsor about her secret recordings of John Roberts and Samuel Alito.",
        "url": "https://www.npr.org/2024/06/12/nx-s1-5002000/lauren-windsor-secret-recordings-supreme-court-chief-justice-roberts-and-justice-alito",
        "urlToImage": "https://media.npr.org/assets/img/2021/09/30/ap_21113667665254_wide-b8d8cbe0de9f2aea654a64af7d869286baeb7b44.jpg?s=1400&c=100&f=jpeg",
        "publishedAt": "2024-06-12T17:45:51Z",
        "content": "Supreme Court Justice Samuel Alito was secretly recorded along with his wife, Alito at the annual Supreme Court Historical Society dinner. \r\nErin Schaff/AP\r\nLauren Windsor, the filmmaker who secretly… [+4209 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Randi Kaye, Anne Clifford, Rachel Clarke",
        "title": "‘It’s going to be heartbreaking:’ Sandy Hook survivors get ready to graduate high school without the classmates they lost in 1st grade massacre - CNN",
        "description": "Horror came to their school when they were just six years old. Now getting ready to graduate, survivors of the Sandy Hook shooting want to make their futures count.",
        "url": "https://www.cnn.com/2024/06/12/us/sandy-hook-survivors-graduate-high-school/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap16138738359320.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-06-12T17:28:00Z",
        "content": "Newtown, ConnecticutCNN\r\n  — \r\nHigh school seniors Emma Ehrens and Grace Fischer will hear their names read out today as they are called to collect their diplomas and start the next chapter of their … [+5274 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "9to5Mac"
        },
        "author": "Chance Miller",
        "title": "Tim Cook talks Apple Intelligence, ChatGPT, and ... the Magic Mouse in post-WWDC interviews - 9to5Mac",
        "description": "Following the WWDC keynote on Monday, Apple CEO Tim Cook sat down for interviews with iJustine, SuperSaf, and MKBHD to...",
        "url": "https://9to5mac.com/2024/06/12/tim-cook-talks-apple-intelligence-chatgpt-and-the-magic-mouse-in-post-wwdc-interviews/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/tim-cook-mkbhd.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2024-06-12T16:59:00Z",
        "content": "Following the WWDC keynote on Monday, Apple CEO Tim Cook sat down for interviews with iJustine, SuperSaf, and MKBHD to talk about iOS 18 and Apple Intelligence. Cook also touched on Apple’s partnersh… [+2059 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters.com",
        "title": "Russia, hit by new US sanctions, halts dollar and euro trade on biggest exchange - Reuters.com",
        "description": null,
        "url": "https://www.reuters.com/markets/europe/moscow-exchange-stop-trading-dollars-after-latest-us-sanctions-2024-06-12/",
        "urlToImage": null,
        "publishedAt": "2024-06-12T16:43:00Z",
        "content": null
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "Anna Matranga",
        "title": "Pope Francis uses homophobic slur for gay men for 2nd time in just weeks, Italian news agency says - CBS News",
        "description": "Pope Francis again used a slur while talking about gay men just weeks after an apology was issued for his first use, Italy's ANSA news agency says.",
        "url": "https://www.cbsnews.com/news/pope-francis-homophobic-slur-gay-men-2nd-time-in-weeks-italian-news-agency/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/06/12/61062b6b-2822-4656-b9d2-d7188a9948eb/thumbnail/1200x630/ea7b7cbd302bd2c6300fee3ace0adb31/ap24164278790051.jpg?v=b30c30e5b3a8744d4d8858062a9c4fa7",
        "publishedAt": "2024-06-12T16:42:29Z",
        "content": "Rome — Just weeks after apologizing for using a homophobic slur, Pope Francis used the same word again during a closed-door meeting on Tuesday, according to Italian news agency ANSA.\r\nANSA, citing un… [+1825 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Marlene Lenthang",
        "title": "Matty Healy, singer of The 1975, gets engaged to model Gabbriette Bechtel - NBC News",
        "description": "The 1975’s lead singer Matty Healy is engaged to model Gabbriette Bechtel.",
        "url": "https://www.nbcnews.com/pop-culture/pop-culture-news/matty-healy-singer-1975-gets-engaged-model-gabbriette-bechtel-rcna156763",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240612-matt-healy-gabbriette-bechtel-mn-1200-1db5d5.jpg",
        "publishedAt": "2024-06-12T16:39:14Z",
        "content": "The 1975s lead singer Matty Healy is engaged to model Gabbriette Bechtel. \r\nBechtel, 26, announced the exciting news in a post on her Instagram story Tuesday night, sharing a photo of her engagement … [+1432 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Eonline.com"
        },
        "author": "Olivia Evans",
        "title": "Taylor Swift Fans Spot Easter Egg During Night Out With Cara Delevingne and More - E! Online - E! NEWS",
        "description": "During Taylor Swift’s latest night out—which saw her accompanied by Cara Delvingne, Lena Dunham and more—fans noted that one of her accessory choices may be an Easter egg for a future announcement.",
        "url": "https://www.eonline.com/news/1403508/taylor-swift-fans-spot-easter-egg-during-night-out-with-cara-delevingne-and-more",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2024512/rs_1200x1201-240612085957-taylorsmith.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2024-06-12T16:17:00Z",
        "content": "Another summer taking cover because Taylor Swift is doing things her fans don't understandyet. \r\nAfter all, the camera flashes and welcome bashes were abuzz in London's Notting Hill neighborhood June… [+820 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Salon"
        },
        "author": null,
        "title": "For Republicans, raw milk is the new masking - Salon",
        "description": "For Republicans, raw milk is the new masking",
        "url": "https://www.salon.com/2024/06/12/for-republicans-raw-milk-is-the-new-masking/",
        "urlToImage": "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2023/03/glass_of_spilled_milk_620920247.jpg",
        "publishedAt": "2024-06-12T16:15:00Z",
        "content": null
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "COLLEEN LONG",
        "title": "The White House isn't ruling out a potential commutation for Hunter Biden after his conviction - The Associated Press",
        "description": "The White House isn't ruling out a potential commutation for Hunter Biden, the president’s son who was convicted on three federal gun crimes and is set to be snetenced by a judge in the coming months. White House press secretary Karine Jean-Pierre told report…",
        "url": "https://apnews.com/article/president-joe-biden-hunter-gun-conviction-commutation-ed69379b56bd1d63f3ddd0d79438746c",
        "urlToImage": "https://dims.apnews.com/dims4/default/6e9bab8/2147483647/strip/true/crop/2185x1229+0+114/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2c%2F4e%2F0303582eedf4b161487adc6e5ba1%2Ff1dc6d0855a04459a05ed59afc3f552e",
        "publishedAt": "2024-06-12T16:04:00Z",
        "content": "ABOARD AIR FORCE ONE (AP) The White House is not ruling out a potential commutation for Hunter Biden, the presidents son who was convicted on three federal gun crimes and is set to be sentenced by a … [+1765 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Nintendo Life"
        },
        "author": "Zion Grassl",
        "title": "Hands On: 'LEGO Horizon' Builds A Welcome Entry Point To Sony's Series - Nintendo Life",
        "description": "Building Zero Dawn",
        "url": "https://www.nintendolife.com/features/hands-on-lego-horizon-builds-a-welcome-entry-point-to-sonys-series",
        "urlToImage": "https://images.nintendolife.com/c9f685bb6da48/1280x720.jpg",
        "publishedAt": "2024-06-12T16:00:00Z",
        "content": "Image: SIE / The LEGO Group\r\nWhile rumors for LEGO Horizon Adventures had been making the rounds the week leading up to Summer Game Fest, we never could have imagined wed see the Nintendo Switch logo… [+6291 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Boeing's Starliner Now Has 5 Leaks While Parked Outside the ISS - Gizmodo",
        "description": "Starliner teams detected a helium leak before launch, two more after liftoff, and now a fourth and fifth leak with the vehicle docked at the ISS. Oh my.",
        "url": "https://gizmodo.com/boeing-starliner-spacecraft-fifth-helium-leak-iss-nasa-1851534977",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/54d4a34837543f8cbae01d2ee7934c5a.png",
        "publishedAt": "2024-06-12T15:55:00Z",
        "content": "Following an iffy docking at the International Space Station last week, Boeing managed to deliver a pair of NASA astronauts to the orbital lab. The stressful Starliner saga continues as the crew caps… [+3617 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters",
        "title": "US consumer prices unchanged in May; rate-cut expectations rise - Reuters",
        "description": null,
        "url": "https://www.reuters.com/markets/us/us-consumer-prices-flat-may-defying-expectations-slight-rise-2024-06-12/",
        "urlToImage": null,
        "publishedAt": "2024-06-12T15:49:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Gaza ceasefire plan in balance US says Hamas proposes 'changes' - BBC.com",
        "description": "US Secretary of State Antony Blinken says some of the changes are \"workable\" and some not.",
        "url": "https://www.bbc.com/news/articles/c0661dnmzezo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/38f4/live/b35a4280-28c5-11ef-acf5-2f465150f8a8.jpg",
        "publishedAt": "2024-06-12T15:43:48Z",
        "content": "By Tom Bateman, BBC state department correspondent  David Gritten, BBC News\r\nUS Secretary of State Antony Blinken says Hamas has proposed \"numerous changes\" to a US-backed plan for a Gaza ceasefire a… [+5508 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Sports Illustrated"
        },
        "author": "Iain MacMillan",
        "title": "At 90-1 Odds, Bet This Sleeper to Be the First-Round Leader at 2024 U.S. Open - Sports Illustrated",
        "description": "Odds are up for first-round leader at the 2024 U.S. Open, and our expert is targeting a long shot.",
        "url": "https://www.si.com/golf/90-1-odds-sleeper-first-round-leader-2024-us-open",
        "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_8099,h_4555,x_0,y_124/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01j04bnhqes7bxmg7a61.jpg",
        "publishedAt": "2024-06-12T15:11:26Z",
        "content": "The opening tee shot at the 2024 U.S. Open at Pinehurst is quickly approaching, so it's time to place some bets.\r\nIf you don't have the patience to wait all four rounds to see if your bet wins or if … [+2116 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "David Shepardson",
        "title": "Southwest CEO will not resign, will consider input from activist investor Elliott - Yahoo Finance",
        "description": "Southwest Airlines CEO Bob Jordan said on Wednesday he will not resign as the air carrier faces pressure from activist investor Elliott Investment Management...",
        "url": "https://finance.yahoo.com/news/southwest-ceo-not-resign-consider-150218703.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/05c3dc46ab683908bd49f02a0da51b16",
        "publishedAt": "2024-06-12T15:08:42Z",
        "content": "By David Shepardson\r\nWASHINGTON (Reuters) - Southwest Airlines CEO Bob Jordan said on Wednesday he will not resign as the air carrier faces pressure from activist investor Elliott Investment Manageme… [+2495 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Kotaku"
        },
        "author": "Ethan Gach",
        "title": "30 Minutes With Monster Hunter Wilds: A Big, Beautiful World - Kotaku",
        "description": "The open-world action-RPG looks truly next-gen so far",
        "url": "https://kotaku.com/monster-hunter-wilds-ps5-preview-release-date-1851535133",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c56cdea788ad4b0615d5a72d090bf707.jpg",
        "publishedAt": "2024-06-12T15:00:00Z",
        "content": "Its been six years since Monster Hunter: World showed what the beloved action series could accomplish when it made the jump from Nintendos consoles back to more powerful hardware. As fun as 2021's Mo… [+6454 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Ed Cara",
        "title": "A New Health Nightmare Emerges for 9/11 First Responders - Gizmodo",
        "description": "New research finds that 9/11 responders exposed to high levels of dust are more likely to suffer early dementia than those with low exposure or who wore masks.",
        "url": "https://gizmodo.com/9-11-terror-attacks-dementia-risk-first-responders-1851533514",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/79230ed1116871b1e7716162d400e8e0.jpg",
        "publishedAt": "2024-06-12T15:00:00Z",
        "content": "New research appears to highlight another tragic aftereffect of the 9/11 terror attacks. Scientists have found evidence that responders exposed to dust and debris from the collapse of the World Trade… [+4673 chars]"
      }
    ]
  }
  constructor() {
    super();
    this.state = {
      article: this.article.articles
    }
  }
  render() {
    return (
      <>
        <h2 className='text-center'>HackerNews-Headlines</h2>
        <div className='row mx-5 my-3'>
          {this.state.article.map((ele) => {
            return (
              <div className='col-md-4' key={ele.url}>
                <NewsItem title={ele.title.slice(0,60)+"..."} desc={ele.description && ele.description.slice(0,105)+"..."} imageUrl={ele.urlToImage} url={ele.url} />
              </div>
            )
          })}
        </div>
      </>
    )
  }
}
