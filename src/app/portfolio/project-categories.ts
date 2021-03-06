import {
  ProjectCategory,
  Project,
  Demo,
  DemoType,
  ProjectLinks,
  ProjectCategoryName
} from "../shared/model/project";

const projectCategories: Array<ProjectCategory> = [
  new ProjectCategory("smartphone", ProjectCategoryName.Mobile, [
    new Project(
      "Anagrammatic",
      "Generate detailed anagrams with customizable criteria.",
      "anagrammatic.png",
      new Demo("anagrammatic.gif", DemoType.Mobile),
      new ProjectLinks(
        "Anagrammatic",
        null,
        "com.tevan.anagrammatic",
        "anagrammatic-ad-free/id1464447783"
      )
    ),
    new Project(
      "Not Too Shabby",
      "Play a random video from a Youtube playlist by kisscactus. Includes a detailed watch history.",
      "notTooShabby.png",
      new Demo("notTooShabby.gif", DemoType.Mobile),
      new ProjectLinks("NotTooShabby")
    )
  ]),
  new ProjectCategory("web", ProjectCategoryName.Web, [
    new Project(
      "Colab Counters",
      "Share counters with other users to track random things. Includes permissions based sharing and " +
        "statistics for counters over time.",
      null,
      new Demo("colabCounters.gif", DemoType.Web),
      new ProjectLinks("ColabCounters", "https://counters.sleek.software")
    )
  ]),
  new ProjectCategory("code", ProjectCategoryName.Bits, [
    new Project(
      "Epic Free Games Reminder",
      "Scrape the Epic Games store and notify a mailing list of the new free offerings.",
      null,
      new Demo(null, DemoType.Bit),
      new ProjectLinks("EpicFreeGamesReminder")
    ),
    new Project(
      "Facebook Comment Sentiment Analysis",
      "Post Comments are extracted from a Facebook page using Facebook's Graph API. These comments could then have " +
        "entity and sentiment analyses performed with Google's Natural Language APIs. The results can then be aggregated " +
        "and served in a helpful way to the user. This was built to further understand how a social media campaign " +
        "was resonating with users. ",
      null,
      new Demo(null, DemoType.Bit),
      new ProjectLinks("FacebookCommentSentimentAnalysis")
    ),
    new Project(
      "Text Justifier",
      "Take an input string and output a justified version of the given text.",
      null,
      new Demo(null, DemoType.Bit),
      new ProjectLinks("TextJustifier")
    ),
    new Project(
      "Job Days Left",
      "A single page app to tell a user how many business days are left at a current job, given an end date.",
      null,
      new Demo(null, DemoType.Bit),
      new ProjectLinks("JobDaysLeft", "https://jobdaysleft.sleek.software")
    ),
    new Project(
      "Mint Account Updater",
      "Get the value of an account from UBT and update the corresponding account in Mint.",
      null,
      new Demo(null, DemoType.Bit),
      new ProjectLinks("MintAccountUpdater")
    )
  ])
];

export { projectCategories };
