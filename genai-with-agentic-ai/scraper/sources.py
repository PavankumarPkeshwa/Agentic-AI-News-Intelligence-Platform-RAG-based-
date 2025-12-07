"""
News Sources Configuration
Defines all RSS feeds and news sources by category
"""

# Default news sources by category (RSS and direct article URLs work better)
NEWS_SOURCES = {
    "Technology": [
        {"url": "https://techcrunch.com/feed/", "type": "rss"},
        {"url": "https://www.theverge.com/rss/index.xml", "type": "rss"},
        {"url": "https://feeds.arstechnica.com/arstechnica/index", "type": "rss"},
        {"url": "https://www.wired.com/feed/rss", "type": "rss"},
        {"url": "https://www.engadget.com/rss.xml", "type": "rss"},
        {"url": "https://mashable.com/feeds/rss/all", "type": "rss"},
        {"url": "https://www.cnet.com/rss/news/", "type": "rss"},
        {"url": "https://www.zdnet.com/news/rss.xml", "type": "rss"},
        {"url": "https://venturebeat.com/feed/", "type": "rss"},
        {"url": "https://www.techmeme.com/feed.xml", "type": "rss"},
    ],
    "Business": [
        {"url": "https://feeds.bbci.co.uk/news/business/rss.xml", "type": "rss"},
        {"url": "https://www.cnbc.com/id/10001147/device/rss/rss.html", "type": "rss"},
        {"url": "https://feeds.bloomberg.com/markets/news.rss", "type": "rss"},
        {"url": "https://www.ft.com/?format=rss", "type": "rss"},
        {"url": "https://www.forbes.com/business/feed/", "type": "rss"},
        {"url": "https://www.businessinsider.com/rss", "type": "rss"},
        {"url": "https://www.wsj.com/xml/rss/3_7085.xml", "type": "rss"},
        {"url": "https://www.reuters.com/business", "type": "rss"},
        {"url": "https://www.marketwatch.com/rss/", "type": "rss"},
        {"url": "https://www.economist.com/business/rss.xml", "type": "rss"},
    ],
    "Science": [
        {"url": "https://www.scientificamerican.com/feed/", "type": "rss"},
        {"url": "https://phys.org/rss-feed/", "type": "rss"},
        {"url": "https://www.nature.com/nature.rss", "type": "rss"},
        {"url": "https://www.sciencedaily.com/rss/all.xml", "type": "rss"},
        {"url": "https://www.sciencenews.org/feed", "type": "rss"},
        {"url": "https://www.newscientist.com/feed/home", "type": "rss"},
        {"url": "https://www.livescience.com/feeds/all", "type": "rss"},
        {"url": "https://www.space.com/feeds/all", "type": "rss"},
        {"url": "https://feeds.feedburner.com/sciencemag/latest", "type": "rss"},
        {"url": "https://www.popsci.com/feed/", "type": "rss"},
    ],
    "Health": [
        {"url": "https://feeds.bbci.co.uk/news/health/rss.xml", "type": "rss"},
        {"url": "https://www.medicalnewstoday.com/rss/news.xml", "type": "rss"},
        {"url": "https://www.healthline.com/feeds/rss", "type": "rss"},
        {"url": "https://www.webmd.com/rss/rss.aspx", "type": "rss"},
        {"url": "https://health.harvard.edu/feed", "type": "rss"},
        {"url": "https://www.mayoclinic.org/rss", "type": "rss"},
        {"url": "https://www.nih.gov/feeds/news.xml", "type": "rss"},
        {"url": "https://www.cdc.gov/rss/cdcnews.xml", "type": "rss"},
        {"url": "https://www.who.int/feeds/entity/mediacentre/news/en/rss.xml", "type": "rss"},
        {"url": "https://www.everydayhealth.com/rss/", "type": "rss"},
    ],
    "Sports": [
        {"url": "https://feeds.bbci.co.uk/sport/rss.xml", "type": "rss"},
        {"url": "https://www.espn.com/espn/rss/news", "type": "rss"},
        {"url": "https://www.cbssports.com/rss/headlines/", "type": "rss"},
        {"url": "https://sports.yahoo.com/rss/", "type": "rss"},
        {"url": "https://www.foxsports.com/rss", "type": "rss"},
        {"url": "https://www.skysports.com/rss/12040", "type": "rss"},
        {"url": "https://www.theguardian.com/sport/rss", "type": "rss"},
        {"url": "https://bleacherreport.com/articles/feed", "type": "rss"},
        {"url": "https://www.si.com/rss/si_topstories.rss", "type": "rss"},
        {"url": "https://www.sportingnews.com/us/rss", "type": "rss"},
    ],
    "Entertainment": [
        {"url": "https://variety.com/feed/", "type": "rss"},
        {"url": "https://deadline.com/feed/", "type": "rss"},
        {"url": "https://www.hollywoodreporter.com/feed/", "type": "rss"},
        {"url": "https://ew.com/feed/", "type": "rss"},
        {"url": "https://www.indiewire.com/feed/", "type": "rss"},
        {"url": "https://www.avclub.com/rss", "type": "rss"},
        {"url": "https://www.rollingstone.com/music/rss/", "type": "rss"},
        {"url": "https://www.billboard.com/feed/", "type": "rss"},
        {"url": "https://www.imdb.com/news/rss/", "type": "rss"},
        {"url": "https://www.rottentomatoes.com/rss/", "type": "rss"},
    ],
}

# Simpler fallback URLs that are more likely to work
FALLBACK_ARTICLES = [
    "https://example.com/tech-news",
    "https://example.com/business-news",
    "https://example.com/science-news",
]
