import type {
  NavLink,
  SocialLink,
  TriangleVariants,
  UseCase,
} from '@/interfaces'
import { FaGithub, FaMastodon, FaTwitter } from 'react-icons/fa'
import { SiMatrix } from 'react-icons/si'
import yaml from 'js-yaml'

// Site constants
export const SITE_NAME = 'Kirigami Labs' as const
export const SITE_URL =
  process.env.SITE_URL || ('https://soliditylang.org/' as const)
export const DEFAULT_IMAGE_PATH = '/assets/siteicon.svg' as const
export const FAVICON_IMAGE_PATH = '/assets/favicon.ico' as const
export const TWITTER_HANDLE = '@solidity_lang' as const

// Navigation constants
export const NAV_HEIGHT = 72 as const
export const BLOG_TITLE = 'KIRIGAMI' as const
export const BLOG_PATH = 'https://kirigami.substack.com/' as const
export const DOCS_URL = 'https://kirigamilabs.com/products' as const
export const PRODUCTS_URL = '/products' as const
export const USE_CASES_PATH = '/use-cases' as const
export const ABOUT_PATH = '/about' as const
export const CONTACT_URL = '/contact' as const
export const NAV_LINKS: NavLink[] = [
  { name: 'Blog', href: BLOG_PATH },
  { name: 'Products', href: PRODUCTS_URL },
  { name: 'Use cases', href: USE_CASES_PATH },
  { name: 'About', href: ABOUT_PATH },
  { name: 'Contact', href: CONTACT_URL },
]
export const MAIN_CONTENT_ID = 'content' as const

// Social links
export const GITHUB_URL = 'https://github.com/ethereum/solidity' as const
export const TWITTER_URL = `https://twitter.com/${
  TWITTER_HANDLE.split('@')[1]
}` as const
export const MASTODON_URL = 'https://fosstodon.org/@solidity' as const
export const MATRIX_URL =
  'https://matrix.to/#/#ethereum_solidity:gitter.im' as const
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: GITHUB_URL, Icon: FaGithub },
  { name: 'Twitter', href: TWITTER_URL, Icon: FaTwitter },
  { name: 'Mastodon', href: MASTODON_URL, Icon: FaMastodon },
  { name: 'Matrix', href: MATRIX_URL, Icon: SiMatrix },
]

// Data fetching constants
export const LATEST_SOLIDITY_RELEASE_URL =
  'https://api.github.com/repos/ethereum/solidity/releases/latest' as const
export const SOLIDITY_REPO_STARGAZERS_URL =
  'https://api.github.com/repos/ethereum/solidity' as const

// Markdown parsing
export const MATTER_OPTIONS = {
  engines: {
    yaml: (s: any) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
  },
} as const

// Events related constants
export const EVENTS_DIR = 'src/events' as const
export const MAP_ZOOM_LEVEL = 10 as const
export const MARKER_ICON_PATH = '/marker.png' as const
export const MARKER_SHADOW_PATH = '/marker-shadow.png' as const
export const REMOTE_EVENTS_LOCATION = 'remote' as const
export const EVENT_PAGE_DYNAMIC_ROUTE = '[event]' as const

/**
 * Blog related constants
 */
export const PRODUCTS_TITLE = 'Kirigami_​Products' as const
export const BLOG_POSTS_DIR = 'src/posts' as const
export const PAGE_PATH = '/page' as const
export const BLOG_PAGE_PATH = `${BLOG_PATH}${PAGE_PATH}` as const
export const CATEGORY_PATH = '/category' as const
export const BLOG_CATEGORY_PATH = `${BLOG_PATH}${CATEGORY_PATH}` as const
export const OLD_BLOG_SUBDOMAIN = 'https://blog.soliditylang.org/' as const

// Blog categories and mappings
export const RELEASES = 'Releases' as const
export const SECURITY_ALERTS = 'Security Alerts' as const
export const ANNOUNCEMENTS = 'Announcements' as const
export const EXPLAINERS = 'Explainers' as const

export const CATEGORIES_URL_MAP = {
  [RELEASES]: 'releases',
  [SECURITY_ALERTS]: 'security-alerts',
  [ANNOUNCEMENTS]: 'announcements',
  [EXPLAINERS]: 'explainers',
} as const
export const CATEGORIES_PATH_MAP = {
  [RELEASES]: `${BLOG_CATEGORY_PATH}/${CATEGORIES_URL_MAP[RELEASES]}`,
  [SECURITY_ALERTS]: `${BLOG_CATEGORY_PATH}/${CATEGORIES_URL_MAP[SECURITY_ALERTS]}`,
  [ANNOUNCEMENTS]: `${BLOG_CATEGORY_PATH}/${CATEGORIES_URL_MAP[ANNOUNCEMENTS]}`,
  [EXPLAINERS]: `${BLOG_CATEGORY_PATH}/${CATEGORIES_URL_MAP[EXPLAINERS]}`,
} as const
export const URL_CATEGORIES_MAP = {
  releases: RELEASES,
  'security-alerts': SECURITY_ALERTS,
  announcements: ANNOUNCEMENTS,
  explainers: EXPLAINERS,
} as const

// Displaying blog posts
export const POSTS_PER_PAGE = 10 as const
export const FEATURED_POSTS = 1 as const
export const MAX_WORDS_PER_POST_PREVIEW = 80 as const
export const MAX_POSTS_TO_PREVIEW = 3 as const

// Triangle decoration variants
export const TRIANGLE_VARIANTS: TriangleVariants = {
  // [x position (<-0+>), y position (0 Base, +Up), rotation (0/180), color token]
  evolving: [
    [1, 1, 0, 'c'],
    [1, 0, 180, 'a'],
    [-1, 0, 180, 'e'],
    [0, 0, 0, 'a'],
    [0, 1, 180, 'c'],
    [-1, 1, 0, 'e'],
  ],
  triforce: [
    [0, 1, 0, 'a'],
    [0, 0, 180, 'e'],
    [-1, 0, 0, 'c'],
    [1, 0, 0, 'd'],
  ],
  slash: [
    [0, 1, 0, 'a'],
    [1, 1, 180, 'c'],
    [0, 0, 180, 'd'],
    [-1, 0, 0, 'e'],
  ],
  detached: [
    [0.2, 1.2, 0, 'a'],
    [0, 0, 180, 'd'],
    [-1, 0, 0, 'e'],
  ],
  double: [
    [-2, 0, 0, 'b'],
    [-1, 0, 180, 'a'],
    [1, 0, 180, 'c'],
    [2, 0, 0, 'd'],
  ],
  floor: [
    [-1, 0, 0, 'c'],
    [0, 0, 180, 'd'],
    [1, 0, 0, 'e'],
  ],
  sunrise: [
    [1, 0, 0, 'a'],
    [3.5, 0, 0, 'a'],
    [-1.5, 0, 0, 'd'],
    [-4, 0, 0, 'd'],
    [0, 0, 180, 'b'],
    [2, 0, 180, 'b'],
    [0, 1, 0, 'b'],
    [2, 1, 0, 'b'],
    [1, 1, 180, 'b'],
  ],
  mobileSunrise: [
    [0.75, 0, 0, 'a'],
    [-1.75, 0, 0, 'd'],
    [-0.25, 0, 180, 'b'],
    [1.75, 0, 180, 'b'],
    [-0.25, 1, 0, 'b'],
    [1.75, 1, 0, 'b'],
    [0.75, 1, 180, 'b'],
  ],
  solidity: [
    [1, 1, 0, 'a'],
    [1, 0, 180, 'c'],
    [-1, 0, 180, 'd'],
    [0, 0, 0, 'e'],
    [-1, 2 - 0.25, 180, 'a'],
    [-1, 3 - 0.25, 0, 'c'],
    [0, 3 - 0.25, 180, 'd'],
    [1, 3 - 0.25, 0, 'e'],
  ],
  mountains: [
    [-2.5, 0, 0, 'd'],
    [-1.5, 0, 0, 'b'],
    [0.5, 0, 0, 'a'],
    [2.5, 0, 0, 'd'],
    [1.5, 0, 0, 'b'],
  ],
  mobileMountains: [
    [-0.5, 0, 0, 'd'],
    [-1.5, 0, 0, 'b'],
    [0.5, 0, 0, 'a'],
    [1.5, 0, 0, 'd'],
  ],
  heap: [
    [-3, 0, 0, 'd'],
    [-1, 0, 0, 'a'],
    [0, 0, 180, 'b'],
    [1, 0, 0, 'd'],
    [3, 0, 0, 'a'],
    [-2, 1, 0, 'b'],
    [-1, 1, 180, 'd'],
    [1, 1, 180, 'a'],
    [2, 1, 0, 'b'],
  ],
  mobileHeap: [
    [-1, 1, 0, 'a'],
    [0, 1, 180, 'b'],
    [-1, 0, 180, 'd'],
    [1, 0, 180, 'a'],
    [1, 1, 0, 'd'],
  ],
  swan: [
    [-1.5, 0, 180, 'd'],
    [-0.5, 0, 0, 'b'],
    [0.5, 0, 180, 'a'],
    [0.5, 1, 0, 'd'],
    [1.5, 1, 180, 'b'],
    [2.5, 1, 0, 'a'],
  ],
  mobileSwan: [
    [-1.5, 0, 180, 'd'],
    [-0.5, 0, 0, 'b'],
    [0.5, 0, 180, 'a'],
    [0.5, 1, 0, 'd'],
    [1.5, 1, 180, 'b'],
    [1.5, 2, 0, 'a'],
  ],
  defi: [
    [-2.5, 0, 180, 'b'],
    [-0.5, 1, 0, 'a'],
    [1.5, 0, 180, 'd'],
    [2.5, 0, 0, 'b'],
  ],
  mobileDefi: [
    [-1.25, 0, 180, 'b'],
    [-1.25, 1.25, 0, 'a'],
    [1.25, 0, 180, 'd'],
    [1.25, 1.25, 0, 'b'],
  ],
}
export const TRIANGLE_WIDTH = 112 as const
export const TRIANGLE_HEIGHT: number = (TRIANGLE_WIDTH * Math.sqrt(3)) / 2
export const TRIANGLES_PADDING = 32 as const
const VARIANT_PX_HEIGHT_NEEDED: {
  [key: keyof typeof TRIANGLE_VARIANTS]: number
} = {}
Object.entries(TRIANGLE_VARIANTS).forEach(([key, value]) => {
  VARIANT_PX_HEIGHT_NEEDED[key] =
    (value.reduce((acc, [_, y]) => Math.max(y, acc), 0) + 1) * TRIANGLE_HEIGHT +
    2 * TRIANGLES_PADDING
})
export { VARIANT_PX_HEIGHT_NEEDED }

// Use case data
export const ETHEREUM_ORG_URL = 'https://ethereum.org' as const
export const USE_CASES: UseCase[] = [
  {
    title: 'Decentralized Analyst and Engineering Services',
    description:
      'Kirigami is focused on bringing the best out of each and every one of our partners. How you might ask? You show us a business problem, WE SOLVE IT. Period. Our arsenal of tools includes: analytical services, automation, APIs, business intelligence, consulting, data services, process optimization, security practices, system monitoring, and a wide variety of reporting tools for any industry.',
    imageSrc: '/assets/use-case-glyph-3.svg',
    triangleVariant: 'heap',
    mobileTriangleVariant: 'mobileHeap',
  },
  {
    title: 'Blockchain and Tokenization',
    description:
      'Kirigami develops blockchain-based solutions and digital assets with features like secure asset ownership, gated economies, and provable scarcity. Blockchain provides an immutable ledger that guarantees the certainty of the information you run your business with. Tokenization, according to BlackRock CEO Larry Fink, will create "the next generation of markets." Not sure how you can use it? The truth is that nearly everything can be improved through the use of blockchain and tokenization.  No matter how small or large your company is, you should investigate how blockchain and tokenization can impact your business. ',
    imageSrc: '/assets/use-case-glyph-4.svg',
    triangleVariant: 'mountains',
    mobileTriangleVariant: 'mobileMountains',
  },
  {
    title: 'Crypto and Decentralized Finance (DeFi)',
    description:
      'Kirigami has actively participated in the rise of Crypto and DeFi across a variety of blockchain ecosystems. How this impacts your business depends on you and your customer base, but we expect that all business will transact on crypto in the future. We have a wide array of products and technical capabilities that allow you and your business to integrate key crypto applications like Bitcoin, Ethereum, Solana, Uniswap, Aave, Compound, Chainlink, and Jupiter just to name a few. Our products include: wallet solutions for the secure storage of digital assets, optimized interfaces for decentralized exchanges, customized protocols leveraging conditional payments and escrow accounts, private relays for transaction bundling, and many many more.',
    imageSrc: '/assets/use-case-glyph-1.svg',
    learnMoreLink: `${ETHEREUM_ORG_URL}/defi`,
    triangleVariant: 'defi',
    mobileTriangleVariant: 'mobileDefi',
  },
  {
    title: 'Customer Engagement and Rewards Programs',
    description:
      'Kirigami, by leveraging the power of AI and Crypto, is able to implement custom-tailored engagement and rewards programs. Would you like to know more about your customers, especially when they are interacting with your products and website? Would you want to create better engagement via new avenues like NFTs and onchain points? This may seem overly technical, but the Metaverse is almost here and you want to be ready for it.',
    imageSrc: '/assets/use-case-glyph-2.svg',
    learnMoreLink: `${ETHEREUM_ORG_URL}/nft`,
    triangleVariant: 'swan',
    mobileTriangleVariant: 'mobileSwan',
  },
  {
    title: 'Supply Chain and Logistics',
    description:
      'Kirigami can assist in any of your supply chain logistics and needs. With experience across a variety of industries, we are prepared to solve your most pressing concerns with the transport and inventory of your goods. We are able to implement systems that enhance transparency and traceability in supply chain management by recording transactions and verifying the authenticity of your products. Thus, helping to prevent counterfeit and improving the trust in your processes.',
    imageSrc: '/assets/use-case-glyph-5.svg',
    triangleVariant: 'sunrise',
    mobileTriangleVariant: 'mobileSunrise',
  },
]

// Examples data
const examples = new Map()

examples.set(
  'comingSoon',
  `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract comingSoon {}`
)

examples.set(
  'helloWorld',
  `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract MyContract {
    function helloWorld() public pure returns (string memory) {
        return "Hello, World!";
    }
}`
)

examples.set(
  'erc20',
  `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract ERC20 {
    string public constant name = "ERC20";
    string public constant symbol = "ERC";
    uint8 public constant decimals = 18;

    mapping(address => uint256) balances;

    event Transfer(address indexed from, address indexed to, uint256 tokens);
    
    uint256 public immutable totalSupply;
    
    constructor(uint256 total) {
        totalSupply = total;
        balances[msg.sender] = total;
    }

    function balanceOf(address tokenOwner) public view returns (uint256) {
        return balances[tokenOwner];
    }
    
    function transfer(address receiver, uint256 numTokens) public returns (bool) {
        require(balances[msg.sender] >= numTokens);
        balances[msg.sender] = balances[msg.sender] - numTokens;
        balances[receiver] = balances[receiver] + numTokens;
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }
    
    function transferFrom(address owner, address buyer, uint256 numTokens) public returns (bool) {
        require(balances[owner] >= numTokens);
        balances[owner] = balances[owner] - numTokens;
        balances[buyer] = balances[buyer] + numTokens;
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
}`
)

examples.set(
  'simpleAuction',
  `// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract SimpleAuction {
    // Parameters of the auction. Times are either
    // absolute unix timestamps (seconds since 1970-01-01)
    // or time periods in seconds.
    address payable public beneficiary;
    uint public auctionEndTime;

    // Current state of the auction.
    address public highestBidder;
    uint public highestBid;

    // Allowed withdrawals of previous bids
    mapping(address => uint) pendingReturns;

    // Set to true at the end, disallows any change.
    // By default initialized to \`false\`.
    bool ended;

    // Events that will be emitted on changes.
    event HighestBidIncreased(address bidder, uint amount);
    event AuctionEnded(address winner, uint amount);

    // The following is a so-called natspec comment,
    // recognizable by the three slashes.
    // It will be shown when the user is asked to
    // confirm a transaction.

    /// Create a simple auction with \`_biddingTime\`
    /// seconds bidding time on behalf of the
    /// beneficiary address \`_beneficiary\`.
    constructor(
        uint _biddingTime,
        address payable _beneficiary
    ) {
        beneficiary = _beneficiary;
        auctionEndTime = block.timestamp + _biddingTime;
    }

    /// Bid on the auction with the value sent
    /// together with this transaction.
    /// The value will only be refunded if the
    /// auction is not won.
    function bid() public payable {
        // No arguments are necessary, all
        // information is already part of
        // the transaction. The keyword payable
        // is required for the function to
        // be able to receive Ether.

        // Revert the call if the bidding
        // period is over.
        require(
            block.timestamp <= auctionEndTime,
            "Auction already ended."
        );

        // If the bid is not higher, send the
        // money back (the failing require
        // will revert all changes in this
        // function execution including
        // it having received the money).
        require(
            msg.value > highestBid,
            "There already is a higher bid."
        );

        if (highestBid != 0) {
            // Sending back the money by simply using
            // highestBidder.send(highestBid) is a security risk
            // because it could execute an untrusted contract.
            // It is always safer to let the recipients
            // withdraw their money themselves.
            pendingReturns[highestBidder] += highestBid;
        }
        highestBidder = msg.sender;
        highestBid = msg.value;
        emit HighestBidIncreased(msg.sender, msg.value);
    }

    /// Withdraw a bid that was overbid.
    function withdraw() public returns (bool) {
        uint amount = pendingReturns[msg.sender];
        if (amount > 0) {
            // It is important to set this to zero because the recipient
            // can call this function again as part of the receiving call
            // before \`send\` returns.
            pendingReturns[msg.sender] = 0;

            if (!payable(msg.sender).send(amount)) {
                // No need to call throw here, just reset the amount owing
                pendingReturns[msg.sender] = amount;
                return false;
            }
        }
        return true;
    }

    /// End the auction and send the highest bid
    /// to the beneficiary.
    function auctionEnd() public {
        // It is a good guideline to structure functions that interact
        // with other contracts (i.e. they call functions or send Ether)
        // into three phases:
        // 1. checking conditions
        // 2. performing actions (potentially changing conditions)
        // 3. interacting with other contracts
        // If these phases are mixed up, the other contract could call
        // back into the current contract and modify the state or cause
        // effects (ether payout) to be performed multiple times.
        // If functions called internally include interaction with external
        // contracts, they also have to be considered interaction with
        // external contracts.

        // 1. Conditions
        require(block.timestamp >= auctionEndTime, "Auction not yet ended.");
        require(!ended, "auctionEnd has already been called.");

        // 2. Effects
        ended = true;
        emit AuctionEnded(highestBidder, highestBid);

        // 3. Interaction
        beneficiary.transfer(highestBid);
    }
}`
)
export { examples }
