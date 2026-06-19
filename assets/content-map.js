// assets/content-map.js
// Site content structure, keyword tags, and search utility

const contentSections = [
  {
    id: "home",
    title: "首页",
    tags: ["mk体育", "首页推荐", "最新动态"],
    keywords: ["mk体育", "首页", "资讯", "赛事"],
    content: "欢迎来到mk体育，获取最新体育资讯与赛事分析。"
  },
  {
    id: "news",
    title: "新闻中心",
    tags: ["mk体育", "新闻", "赛事报道"],
    keywords: ["mk体育新闻", "体育赛事", "报道", "mk体育"],
    content: "涵盖国内外重大体育赛事新闻，mk体育为您实时播报。"
  },
  {
    id: "match",
    title: "赛事直播",
    tags: ["mk体育", "直播", "比分"],
    keywords: ["mk体育直播", "比分", "赛事直播", "mk体育"],
    content: "mk体育提供高清赛事直播与即时比分更新。"
  },
  {
    id: "highlight",
    title: "精彩集锦",
    tags: ["mk体育", "集锦", "回放"],
    keywords: ["mk体育集锦", "高光时刻", "回放", "mk体育"],
    content: "mk体育精选比赛集锦，不错过任何精彩瞬间。"
  },
  {
    id: "community",
    title: "社区互动",
    tags: ["mk体育", "社区", "讨论"],
    keywords: ["mk体育社区", "球迷讨论", "互动", "mk体育"],
    content: "加入mk体育社区，与球迷一起讨论赛事热点。"
  }
];

const siteConfig = {
  baseUrl: "https://portal-wap-mk.com",
  siteName: "mk体育",
  defaultSection: "home"
};

function searchContent(query) {
  if (!query || typeof query !== "string") {
    return [];
  }
  const lowerQuery = query.toLowerCase();
  return contentSections.filter(section => {
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const keywordMatch = section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
    const contentMatch = section.content.toLowerCase().includes(lowerQuery);
    return tagMatch || keywordMatch || contentMatch;
  });
}

function getSectionById(id) {
  return contentSections.find(section => section.id === id) || null;
}

function getAllTags() {
  const tagSet = new Set();
  contentSections.forEach(section => {
    section.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

function getAllKeywords() {
  const kwSet = new Set();
  contentSections.forEach(section => {
    section.keywords.forEach(kw => kwSet.add(kw));
  });
  return Array.from(kwSet);
}

function printSiteSummary() {
  console.log(`站点: ${siteConfig.siteName}`);
  console.log(`地址: ${siteConfig.baseUrl}`);
  console.log(`分区数: ${contentSections.length}`);
  contentSections.forEach(sec => {
    console.log(`  - ${sec.title} (${sec.id}) [标签: ${sec.tags.join(", ")}]`);
  });
}

// Example usage (commented out to avoid side effects)
// console.log(searchContent("mk体育"));
// console.log(getSectionById("news"));

export {
  contentSections,
  siteConfig,
  searchContent,
  getSectionById,
  getAllTags,
  getAllKeywords,
  printSiteSummary
};