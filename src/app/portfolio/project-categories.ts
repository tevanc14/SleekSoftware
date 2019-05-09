import {
  ProjectCategory,
  Project,
  Demo,
  DemoType,
  ProjectLinks
} from "../shared/model/project";

// TODO: Functionalize the gcp path
const projectCategories: Array<ProjectCategory> = [
  new ProjectCategory("web", "Web", [
    new Project(
      "Colab Counters",
      "Share counters with other users to track random things. Includes permissions based sharing and statistics for counters over time.",
      new Demo(
        "https://storage.googleapis.com/interactiveresume-430ce.appspot.com/demo/colabCounters.gif",
        DemoType.Web
      ),
      new ProjectLinks("https://github.com/tevanc14/ColabCounters")
    )
  ]),
  new ProjectCategory("smartphone", "Mobile", [
    new Project(
      "Anagrammatic",
      "Generate detailed anagrams with customizable criteria.",
      new Demo(
        "https://storage.googleapis.com/interactiveresume-430ce.appspot.com/demo/anagrammatic.gif",
        DemoType.Mobile
      ),
      new ProjectLinks("https://github.com/tevanc14/Anagrammatic")
    ),
    new Project(
      "Not Too Shabby",
      "Play a random video from a Youtube playlist by kisscactus. Includes a detailed watch history.",
      new Demo(
        "https://storage.googleapis.com/interactiveresume-430ce.appspot.com/demo/anagrammatic.gif",
        DemoType.Mobile
      ),
      new ProjectLinks("https://github.com/tevanc14/NotTooShabby")
    )
  ]),
  new ProjectCategory("code", "Bits", [])
];

export { projectCategories };
