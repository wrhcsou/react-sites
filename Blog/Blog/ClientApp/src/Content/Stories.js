export const stories = [
  {
    id: 0,
    title: "Video of the Day - Apollo Guidance Code Listing",
    headerImage:
      "https://cdn.mos.cms.futurecdn.net/QpnB8NFxvo7ktcY4t5DCij-650-80.jpg",
    body: [
      {
        type: "text",
        content:
          "A few days ago I was browsing YouTube videos to pass some time. My usual mix of YouTube content consists of music, tech videos, and cars. However, this rare gem came across my feed and I was intrigued enough to share it here. As a software developer, I feel looking at code from days-gone-by are exteremly important. If not for just the awe that such simple and primitive code was able to navigate Apollo to the Moon and back.",
      },
      {
        type: "embedVideo",
        content: "https://www.youtube.com/embed/-y37tXoBDx0",
      },
      {
        type: "text",
        content: "I hope you enjoy this video as much as I did.",
      },
    ],
  },
  {
    id: 1,
    title: "ARM Based Macs are Coming",
    headerImage:
      "https://photos5.appleinsider.com/gallery/18808-18293-161026-Hands-xl.jpg",
    body: [
      {
        type: "text",
        content:
          "As the days count down to WWDC 2020, we're all waiting for the announcment that Apple will be transitioning to ARM based processors. This shift in architecture brings more control for the Mac platform for Apple and will allow them to have greater year-over-year improvements over what Intel has been able to offer.",
      },
      {
        type: "text",
        content:
          "With all transitions, there's going to be eventual growing pains that will be uncovered. To me, as a software developer, my biggest question (as I currently type this on an Intel Mac) is how virtualization will be supported on the new architechture. Emulating x86 on ARM will not be the most performant use of the system and running virtual machines on an ARM Mac is still a major sticking point for me on this move by Apple",
      },
      {
        type: "text",
        content:
          "Below I'm keeping tabs on the links discussing Apple's planned move to ARM and what we can expect. What are your thoughts about this move? Do you have any concerns about continuing to use Mac machines or will it force you to transfer to a PC platform, especially for software development?",
      },
      {
        type: "link",
        content:
          "https://www.theverge.com/2020/4/24/21233661/macos-arm-processor-transition-apps-developers-catalyst-wwdc",
        linkTitle:
          "The Verge - Making macOS run well on ARM processors isn’t the hard part",
        linkDescription: "Less surprise will mean more delight",
        linkImage:
          "https://photos5.appleinsider.com/gallery/18808-18293-161026-Hands-xl.jpg",
      },
    ],
  },
];
