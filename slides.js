// =============================================================================
// SEMINAR SLIDES DATA
// =============================================================================

const slidesData = [
  {
    id: 1,
    title: "TRAPPED BY DESIGN",
    subtitle: "The Hidden Psychology of How Modern Business Steals Your Money and Attention",
    footer: "Powered by Ajay K J",
    visualType: "grid-3d",
    bulletPoints: []
  },
  {
    id: 2,
    title: "The Illusion of Choice",
    subtitle: "",
    visualType: "monolith-maze",
    bulletPoints: [
      "We believe our buying decisions belong entirely to us.",
      "The truth is, human psychology is highly hackable.",
      "Every interface, notification, and price tag is a silent trap designed to bypass your defenses."
    ]
  },
  {
    id: 3,
    title: "My First Lesson in Business",
    subtitle: "",
    visualType: "exchange-story",
    bulletPoints: [
      "\"When I was a kid, I went to a shop to buy an 8-rupee pen. I gave the shopkeeper a 10-rupee note, expecting 2 rupees back.\"",
      "\"Instead of coins, he handed me two chocolates and said, 'I don't have any change.'\"",
      "\"I didn't want the candy, but I took it anyway. Looking back, I realized it wasn't a coin shortage at allâ€”it was a trick.\"",
      "\"The shopkeeper forced me to buy something I never asked for. I didn't make the choice. He made it for me.\""
    ]
  },
  {
    id: 4,
    title: "The Coca-Cola Ice Trick",
    subtitle: "",
    visualType: "cola-ice-trick",
    bulletPoints: [
      "\"Think about the last time you bought a cold Coca-Cola at a fast-food restaurant.\"",
      "\"You see two options on the menu: a medium cup or a massive large cup. You pay the extra money because the large cup looks like a much better deal.\"",
      "\"But here is the trick: the workers fill that large cup straight to the top with ice. If you take the ice out, the medium and the large hold the exact same amount of actual soda.\"",
      "\"You didn't buy more to drink. You just paid extra money for frozen water and a bigger paper cup.\""
    ]
  },
  {
    id: 5,
    title: "The Trap of the Free Trial",
    subtitle: "",
    visualType: "free-trial-trap",
    bulletPoints: [
      "\"We have all signed up for a free trial or a software subscription online, thinking it is risk-free.\"",
      "\"They make it effortless to joinâ€”just one click, a saved card, and you are inside. But when you finally want to leave, the door is locked.\"",
      "\"They hide the cancellation button behind five different menus, force you to click through popups, or even make you talk to a customer service agent just to stop paying.\"",
      "\"They use friction as a weapon. They count on the fact that you will get too tired, too busy, or too annoyed to finish canceling, forcing you to pay for another month you never wanted.\""
    ]
  },
  {
    id: 6,
    title: "The Illusion of Progress",
    subtitle: "(The Coffee Stamp Trick)",
    visualType: "coffee-stamp-trick",
    bulletPoints: []
  },
  {
    id: 7,
    title: "The Trap of Manufactured Scarcity",
    subtitle: "",
    visualType: "manufactured-scarcity",
    bulletPoints: [
      "\"Have you ever looked at an online shopping site and seen a bright red warning pop up that says, 'Only 1 item left in stock!'?\"",
      "\"Your heart rate instantly goes up. It triggers an immediate panicâ€”the fear of missing out on a rare item before someone else takes it.\"",
      "\"You stop comparing prices, skip your research, and rush to buy it right away before you lose your chance.\"",
      "\"The trick is that the warning is often completely fake. It's just a piece of code designed to manufacture panic, bypass your logical thinking, and force you into an instant purchase.\""
    ]
  },
  {
    id: 8,
    title: "The Phantom Countdown Timer",
    subtitle: "",
    visualType: "phantom-timer",
    bulletPoints: [
      "\"Have you ever tried to buy tickets online or book a flight, only to see a bright red clock ticking down from ten minutes, warning you that your seats will expire?\"",
      "\"Panic sets in instantly. You rush to enter your credit card details, skipping the fine print and ignoring extra fees because you are racing against the clock.\"",
      "\"The moment the timer hits zero, what happens? If you refresh the page, the timer simply resets back to ten minutes.\"",
      "\"The countdown isn't real. It is a manufactured emergency designed to rush your brain, shut down your critical thinking, and force you into an instant purchase.\""
    ]
  },
  {
    id: 9,
    title: "The PDF Editor Subscription Trap",
    subtitle: "",
    visualType: "pdf-trap",
    bulletPoints: [
      "\"Have you ever needed to quickly edit, merge, or sign a single PDF document online, so you searched for a free PDF tool like Smallpdf or ILovePDF?\"",
      "\"You upload your file, make your quick edit, and click 'Download PDF' with a sigh of relief.\"",
      "\"Then, right at the final moment, a hard paywall blocks your download. A popup appears stating your free trial has ended, requiring an expensive monthly subscription just to get your own file back.\"",
      "\"By that point, you are pressed for time, your document is locked behind their system, and you enter your credit card out of pure frustration. They trap your workflow at the final click.\""
    ]
  },
  {
    id: 10,
    title: "The Free Delivery Cart Trap",
    subtitle: "",
    visualType: "cart-trap",
    bulletPoints: [
      "\"Have you ever added an item to your online shopping cart, only for a notification to pop up saying: 'Add just $15 more to unlock free delivery!'?\"",
      "\"Your brain instantly shifts focus from what you actually wanted to buy, and you start scrambling through the catalog to find a cheap filler item just to beat the threshold.\"",
      "\"You end up spending $20 on something you don't even need, just to save $5 on shipping.\"",
      "\"You didn't save money. The store manipulated your cart to make you spend more than you originally planned.\""
    ]
  },
  {
    id: 11,
    title: "The Invisible Digital Ear",
    subtitle: "(The Targeted Ad Trap)",
    visualType: "targeted-ad",
    bulletPoints: [
      "\"Have you ever casually mentioned out loud to a friend that you need to buy a new pair of shoes, without typing it anywhere?\"",
      "\"Then, a few minutes later, you open Instagram or TikTok, and the very first post on your feed is a glossy ad for running shoes.\"",
      "\"You feel like your phone is actively listening to your private conversations and spying on your everyday life.\"",
      "\"Even if it's not always voice recording, background algorithms track your location, your typing speed, your pauses, and your friends' habits to predict your thoughts before you even search. They turn your personal life into an open billboard.\""
    ]
  },
  {
    id: 12,
    title: "The Bait Price Switch",
    subtitle: "(Drip Pricing)",
    visualType: "drip-pricing",
    bulletPoints: [
      "\"Have you ever bought an online course or event ticket where the initial price tag looked like a fantastic bargainâ€”say, just $10?\"",
      "\"You feel excited about the great deal and spend your time going through all the registration steps.\"",
      "\"Right at the final checkout screen, the price splits apart: a $15 'platform access fee', a $10 'instructor material fee', and an $8 'mandatory certification fee' are suddenly bolted on.\"",
      "\"They drip-feed the true cost piece by piece instead of showing you the real total upfront. They trick your budget at the start by hiding the full price until you're too invested to turn back.\""
    ]
  },
  {
    id: 13,
    title: "The Emotional Ping",
    subtitle: "(Zomato's Push Notification Trap)",
    visualType: "zomato-push",
    bulletPoints: [
      "\"Have you ever received a random notification at lunch or midnight that felt like a witty text from a close friend instead of an advertisement?\"",
      "\"Food delivery apps like Zomato use self-deprecating jokes, heart emojis, and relatable humor to completely disarm your natural defense against ads.\"",
      "\"They don't just sell food—they artificially manufacture cravings when you weren't even hungry, playing on loneliness, late-night boredom, or work stress.\"",
      "\"By disguising continuous advertising as friendly entertainment, they manipulate you into opening the app and placing an impulse order you never planned to make.\""
    ]
  },
  {
    id: 14,
    title: "The Fake Scratch Card",
    subtitle: "(The Gamified Ad Trap - Google Pay & PhonePe)",
    visualType: "scratch-card",
    bulletPoints: [
      "\"Have you ever made a quick UPI payment at a local shop or tea stall, and instantly heard your phone chime: 'Congratulations! You won a scratch card!'?\"",
      "\"You swipe your finger across the screen with genuine excitement, hoping for a small cashback of ₹10 or ₹50 into your bank account.\"",
      "\"Instead of real money, it reveals an advertisement disguised as a prize—a coupon for an online rummy app, fantasy betting, or ₹200 off a luxury brand you will never buy.\"",
      "\"They hijack the psychological thrill of a lottery ticket to turn everyday bill payments into a slot machine, pushing paid sponsorships while pretending they rewarded you.\""
    ]
  },
  {
    id: 15,
    title: "The Cart-Padding Trap",
    subtitle: "(Minimum Order Hostage - Quick Commerce)",
    visualType: "cart-padding",
    bulletPoints: [
      "\"Have you ever opened a 10-minute grocery app just to order a single packet of milk, eggs, or onions that you urgently needed for cooking?\"",
      "\"You put the \u20B935 item in your cart, only for a bright red warning to pop up: 'Add \u20B9165 more to checkout' or 'Add \u20B9199 for free delivery!'\"",
      "\"Rather than paying a steep delivery fee on a cheap item, you start tossing chips, biscuits, and sodas into your cart just to make the order feel 'worth it.'\"",
      "\"They set artificial cart limits to hold your urgent essentials hostage, tricking you into spending five times more money on snacks you never wanted in the first place.\""
    ]
  }
];