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
      "Websites show fake warnings like 'Only 1 item left in stock!'",
      "This triggers instant panic and the fear of missing out.",
      "You stop comparing prices and rush to buy immediately.",
      "The warning is often just programmed code to force fast purchases."
    ]
  },
  {
    id: 8,
    title: "The Phantom Countdown Timer",
    subtitle: "",
    visualType: "phantom-timer",
    bulletPoints: [
      "Booking sites display a ticking timer warning your seats will expire.",
      "The artificial urgency forces you to hurry and ignore extra fees.",
      "When the timer hits zero, refreshing the page simply resets it.",
      "It is a manufactured emergency to make you buy without thinking."
    ]
  },
  {
    id: 9,
    title: "The PDF Editor Subscription Trap",
    subtitle: "",
    visualType: "pdf-trap",
    bulletPoints: [
      "You use a 'free' online tool to edit, merge, or sign a document.",
      "After spending time editing, you click download.",
      "A sudden paywall demands a monthly subscription to get your file back.",
      "Your document is held hostage at the final step when you are out of time."
    ]
  },
  {
    id: 10,
    title: "The Free Delivery Cart Trap",
    subtitle: "",
    visualType: "cart-trap",
    bulletPoints: [
      "Stores notify you: 'Add items worth \u20b9200 to get FREE delivery!'",
      "Your focus shifts from what you need to finding filler items.",
      "You spend \u20b9250 on extra items just to avoid a \u20b950 delivery charge.",
      "You don't save money\u2014the store successfully makes you spend 3x more."
    ]
  },
  {
    id: 11,
    title: "The Invisible Digital Ear",
    subtitle: "(The Targeted Ad Trap)",
    visualType: "targeted-ad",
    bulletPoints: [
      "You speak about a product out loud to a friend without typing it.",
      "Minutes later, your social media feed is flooded with ads for it.",
      "Algorithms track shared Wi-Fi, location proximity, and friend activity.",
      "They predict what you want before you even search for it."
    ]
  },
  {
    id: 12,
    title: "The Bait Price Switch",
    subtitle: "(Drip Pricing)",
    visualType: "drip-pricing",
    bulletPoints: [
      "An item or ticket is advertised at an attractive low price like $10.",
      "You spend time completing the booking and entering your details.",
      "At final checkout, extra hidden fees are suddenly tacked on.",
      "The true cost is revealed only after you are already committed."
    ]
  },
  {
    id: 13,
    title: "The Emotional Ping",
    subtitle: "(Zomato's Push Notification Trap)",
    visualType: "zomato-push",
    bulletPoints: [
      "Apps send funny notifications that look like friendly texts.",
      "Jokes and emojis make you forget it is an advertisement.",
      "They trigger food cravings when you feel bored or lonely.",
      "Friendly messages trick you into ordering food on impulse."
    ]
  },
  {
    id: 14,
    title: "The Fake Scratch Card",
    subtitle: "(The Gamified Ad Trap - Google Pay & PhonePe)",
    visualType: "scratch-card",
    bulletPoints: [
      "Paying a bill gives you a digital scratch card.",
      "You scratch it expecting real cashback money.",
      "Instead, you just get discount coupons and betting app ads.",
      "Lottery excitement is used to push sponsored advertisements."
    ]
  },
  {
    id: 15,
    title: "The Cart-Padding Trap",
    subtitle: "(Minimum Order Hostage - Quick Commerce)",
    visualType: "cart-padding",
    bulletPoints: [
      "You add an urgent ₹35 cooking essential (like milk) to your cart.",
      "A warning blocks checkout: 'Add ₹165 more to place your order!'",
      "You toss chips, sodas, and snacks into the cart to meet the minimum.",
      "Your urgent essential is held hostage to make you spend 5x more on junk."
    ]
  },
  {
    id: 16,
    title: "Dark Patterns in Action",
    subtitle: "Real-World Video Demonstration",
    visualType: "video-case",
    bulletPoints: [
      "Watch real interfaces manipulate user decisions in real time.",
      "Artificial urgency tricks you into skipping critical details.",
      "Always pause and review total prices before the final click."
    ]
  },
  {
    id: 17,
    title: "Questions & Answers",
    subtitle: "",
    visualType: "qa-creative",
    bulletPoints: []
  },
  {
    id: 18,
    title: "Thank You!",
    subtitle: "",
    visualType: "thank-you-creative",
    bulletPoints: []
  }
];