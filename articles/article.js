// ===================================================
// BRANZ MEGA KUNINGAN — Article Data & Rendering
// ===================================================

const articleData = [
  {
    id: 1,
    image: "../assets/img/article/Artikel 1.png",
    titles: {
      en: "Branz Mega Kuningan: A New Standard of Urban Living in South Jakarta",
      ja: "ブランズ・メガ・クニンガン：南ジャカルタが誇る都市生活の新たな基準",
    },
    descriptions: {
      en: "Discover Branz Mega Kuningan, a premium apartment development by Tokyu Land Indonesia in the heart of South Jakarta's CBD.",
      ja: "ブランズ・メガ・クニンガンは、東急ランド・インドネシアが手掛ける南ジャカルタCBDのプレミアムレジデンスです。",
    },
    contents: {
      en: `
        <p>
          Branz Mega Kuningan represents a new chapter in urban living, where thoughtful design meets prime location
          in the heart of South Jakarta's most prestigious business district. Developed by Tokyu Land Indonesia,
          this premium residence offers a lifestyle that balances productivity, comfort, and connectivity.
        </p>
        <p>
          Every detail of Branz has been crafted with the modern urbanite in mind. From the moment you step into the
          grand lobby, you are welcomed by an atmosphere of refined elegance — a space that feels both grand and intimate.
        </p>
        <p>
          Residents enjoy direct access to Mega Kuningan's ecosystem of corporate headquarters, world-class dining,
          and upscale shopping destinations. Whether you are a young professional seeking efficiency or a family
          looking for a secure and vibrant community, Branz adapts to your rhythm.
        </p>
        <p>
          The building features a range of amenities designed to enrich daily life: an infinity pool overlooking
          the Jakarta skyline, a fully equipped fitness center, lush communal gardens, and 24-hour concierge
          service. Every corner of Branz speaks to a commitment to quality and a deep understanding of what
          city dwellers truly need.
        </p>
      `,
      ja: `
        <p>
          ブランズ・メガ・クニンガンは、南ジャカルタで最も権威のあるビジネス地区の中心に位置し、洗練されたデザインと
          最高のロケーションが融合した都市生活の新しい章を象徴しています。東急ランド・インドネシアが手掛ける
          このプレミアムレジデンスは、生産性、快適性、そして利便性のバランスが取れたライフスタイルを提供します。
        </p>
        <p>
          ブランズの細部にわたるこだわりは、現代の都市居住者のために丹念に設計されています。グランドロビーに
          足を踏み入れた瞬間から、洗練された優雅さの雰囲気に包まれます——壮大でありながらも親密な空間です。
        </p>
        <p>
          居住者は、メガ・クニンガンの企業本社、ワールドクラスのダイニング、高級ショッピングが集まる
          エコシステムに直接アクセスできます。効率性を求める若いプロフェッショナルも、安全で活気ある
          コミュニティを探す家族も、ブランズはそれぞれの生活リズムに寄り添います。
        </p>
      `,
    },
  },
  {
    id: 2,
    image: "../assets/img/article/Artikel 2.png",
    titles: {
      en: "Exploring the Mega Kuningan Neighborhood: A Guide for Residents and Investors",
      ja: "メガ・クニンガンエリアガイド：居住者と投資家のための完全ガイド",
    },
    descriptions: {
      en: "Explore Mega Kuningan, South Jakarta's premier business district, and learn why Branz is the ideal home base.",
      ja: "南ジャカルタのプレミアビジネス地区、メガ・クニンガンをご紹介。ブランズが理想の拠点である理由をご覧ください。",
    },
    contents: {
      en: `
        <p>
          Mega Kuningan has established itself as one of Jakarta's most desirable neighborhoods — a place where
          business, lifestyle, and culture converge. Home to multinational corporations, embassies, and
          Jakarta's finest dining and retail, this district offers an unparalleled urban experience.
        </p>
        <p>
          For residents of Branz, the neighborhood becomes an extension of home. Within minutes, you can walk
          to premier shopping centers, enjoy a meal at world-renowned restaurants, or conduct business at
          nearby corporate towers. The area's excellent road connectivity means that SCBD, Gatot Subroto,
          and the inner-city toll road are all within easy reach.
        </p>
        <p>
          Investors have taken notice of Mega Kuningan's steady appreciation, driven by limited land supply
          and sustained demand for premium addresses. Branz sits at the center of this growth story,
          offering a rare opportunity to own a piece of Kuningan's skyline.
        </p>
      `,
      ja: `
        <p>
          メガ・クニンガンは、ビジネス、ライフスタイル、文化が融合するジャカルタで最も魅力的なエリアの一つとして
          確固たる地位を築いています。多国籍企業、大使館、そしてジャカルタ屈指のダイニングや小売店が集まる
          この地区は、比類のない都市体験を提供します。
        </p>
        <p>
          ブランズの居住者にとって、このエリアは家の延長となります。数分でプレミアムショッピングセンターまで
          歩いて行け、世界的に有名なレストランでの食事や、近隣のオフィスビルでのビジネスを楽しめます。
          エリアの優れた道路接続により、SCBD、ガトット・スブロト、高速道路へのアクセスも容易です。
        </p>
      `,
    },
  },
  {
    id: 3,
    image: "../assets/img/article/Artikel 3.png",
    titles: {
      en: "Japanese Craftsmanship Meets Indonesian Hospitality: The Story Behind Branz",
      ja: "日本の匠の技とインドネシアのおもてなしの融合：ブランズに込められた物語",
    },
    descriptions: {
      en: "Learn how Tokyu Land Indonesia brings Japanese building standards and Indonesian warmth together at Branz.",
      ja: "東急ランド・インドネシアがブランズで日本の建築基準とインドネシアの温かさをどのように融合させたかをご紹介します。",
    },
    contents: {
      en: `
        <p>
          At the heart of Branz Mega Kuningan lies a unique collaboration between two cultures: Japanese precision
          and Indonesian warmth. Developed by Tokyu Land Indonesia — a subsidiary of one of Japan's most respected
          urban development companies — the project embodies the best of both worlds.
        </p>
        <p>
          Japanese construction standards are renowned worldwide for their attention to detail, durability, and
          earthquake resistance. Branz was built in partnership with Shimizu Corporation, one of Japan's oldest
          and most prestigious general contractors, ensuring that every structural element meets the highest
          standards of safety and quality.
        </p>
        <p>
          Yet the soul of Branz is distinctly Indonesian. The lobby's warm material palette, the lush tropical
          landscaping, and the intuitive hospitality of the concierge team all reflect Indonesia's legendary
          keramahan (warmth). The result is a residence that feels both meticulously crafted and warmly inviting.
        </p>
        <p>
          This cultural fusion extends to the amenities as well. The fitness center, pool, and communal spaces
          are designed to Japanese ergonomic standards while embracing the indoor-outdoor living that
          Indonesians love. It is a rare synthesis that makes Branz truly one of a kind.
        </p>
      `,
      ja: `
        <p>
          ブランズ・メガ・クニンガンの核心には、日本の精密さとインドネシアの温かさという二つの文化の
          ユニークな融合があります。日本で最も尊敬される都市開発企業の一つである東急ランドの子会社、
          東急ランド・インドネシアが手掛けるこのプロジェクトは、両方の良さを体現しています。
        </p>
        <p>
          日本の建築基準は、細部へのこだわり、耐久性、耐震性において世界的に高く評価されています。
          ブランズは、日本で最も歴史があり権威のあるゼネコンの一つである清水建設との協力により
          建設され、すべての構造要素が最高水準の安全性と品質を満たしています。
        </p>
        <p>
          しかし、ブランズの魂は明確にインドネシア的です。ロビーの温かみのある素材感、豊かな熱帯の
          景観、コンシェルジュチームの直感的なおもてなしは、すべてインドネシアの伝説的なケラマハン
          （温かさ）を反映しています。結果として、細部まで丹念に作り込まれながらも、温かく迎え入れてくれる
          住まいが実現しました。
        </p>
      `,
    },
  },
  {
    id: 4,
    image: "../assets/img/article/Artikel 4.png",
    titles: {
      en: "A Guide to Apartment Investment in Jakarta: Why Location Matters More Than Ever",
      ja: "ジャカルタのアパートメント投資ガイド：ロケーションがこれまで以上に重要な理由",
    },
    descriptions: {
      en: "Key factors to consider when investing in Jakarta's apartment market, with insights on the Kuningan area.",
      ja: "ジャカルタのアパート市場に投資する際の重要な考慮事項と、クニンガンエリアの魅力について解説します。",
    },
    contents: {
      en: `
        <p>
          Jakarta's property market has long been a cornerstone of Indonesia's economy, and apartment investment
          continues to offer compelling opportunities for both local and international buyers. However, in an
          increasingly discerning market, one factor has become more critical than ever: location.
        </p>
        <p>
          Mega Kuningan stands out as one of Jakarta's most resilient property sub-markets. Its status as a
          premier business district means consistent demand from corporate tenants, expatriates, and
          high-net-worth individuals seeking a strategic base in the capital.
        </p>
        <p>
          When evaluating an apartment investment, several factors deserve close attention: proximity to
          business centers, quality of construction, building management, and access to lifestyle amenities.
          Branz scores highly on all fronts, with its direct connectivity to the Kuningan business ecosystem,
          Japanese-grade construction, and comprehensive facilities.
        </p>
        <p>
          For investors, the appeal of Branz is clear: a limited supply of premium units in a high-demand
          location, built to international standards by a trusted developer. As Jakarta continues to grow,
          properties in prime locations like Mega Kuningan are well-positioned for long-term value appreciation.
        </p>
      `,
      ja: `
        <p>
          ジャカルタの不動産市場は長年にわたりインドネシア経済の基盤であり、アパートメント投資は国内外の
          バイヤーにとって依然として魅力的な機会を提供しています。しかし、ますます目の肥えた市場において、
          これまで以上に重要な要素となっているのがロケーションです。
        </p>
        <p>
          メガ・クニンガンは、ジャカルタで最も安定した不動産サブマーケットの一つとして際立っています。
          プレミアビジネス地区としての地位は、首都での戦略的な拠点を求める法人テナント、駐在員、
          富裕層からの一貫した需要を意味します。
        </p>
        <p>
          投資用アパートメントを評価する際には、ビジネスセンターへの近接性、建設品質、建物管理、
          ライフスタイル施設へのアクセスなど、いくつかの要素に注目する必要があります。ブランズは、
          クニンガンのビジネスエコシステムへの直接接続、日本品質の建設、包括的な施設により、
          すべての面で高い評価を得ています。
        </p>
      `,
    },
  },
  {
    id: 5,
    image: "../assets/img/article/Artikel 5.png",
    titles: {
      en: "Five Questions to Ask Before Choosing Your Next Apartment in Jakarta",
      ja: "ジャカルタで次のアパートメントを選ぶ前に確認すべき5つの質問",
    },
    descriptions: {
      en: "Essential questions every apartment seeker in Jakarta should ask before making a decision.",
      ja: "ジャカルタでアパートメントを探すすべての人が決断前に確認すべき重要な質問。",
    },
    contents: {
      en: `
        <p>
          Choosing the right apartment in Jakarta can feel overwhelming. With dozens of developments across
          the city, each promising a unique lifestyle, how do you separate genuine quality from marketing?
          Here are five essential questions to guide your decision.
        </p>
        <p>
          <strong>1. Who is the developer?</strong> A trusted developer with a proven track record is your
          first indicator of quality. Tokyu Land Indonesia brings decades of experience and Japanese
          standards of excellence to every project.
        </p>
        <p>
          <strong>2. What is the construction quality?</strong> Look beyond the finishes to the structural
          integrity. Branz was built by Shimizu Corporation, ensuring earthquake-resistant construction
          and premium materials throughout.
        </p>
        <p>
          <strong>3. How is the location?</strong> Consider not just the address but the walkability,
          traffic access, and proximity to daily necessities. Mega Kuningan offers an unmatched
          combination of business access and lifestyle amenities.
        </p>
        <p>
          <strong>4. What amenities matter to you?</strong> Pool, gym, security, concierge — prioritize
          what you will actually use. Branz's amenities are designed for real daily living, not just
          showroom appeal.
        </p>
        <p>
          <strong>5. What is the long-term value?</strong> Consider resale potential, rental demand,
          and management quality. A well-located, well-built apartment in a managed development
          holds its value better over time.
        </p>
      `,
      ja: `
        <p>
          ジャカルタで適切なアパートメントを選ぶことは、時に圧倒されるかもしれません。市内には数多くの
          物件があり、それぞれが独自のライフスタイルを約束しています。本物の品質とマーケティングを
          どのように見分ければよいのでしょうか？ここでは、決断の指針となる5つの重要な質問を紹介します。
        </p>
        <p>
          <strong>1. デベロッパーは誰ですか？</strong>実績のある信頼できるデベロッパーは、品質の
          最初の指標です。東急ランド・インドネシアは、数十年の経験と日本の卓越した基準を
          すべてのプロジェクトに反映しています。
        </p>
        <p>
          <strong>2. 建設品質はどうですか？</strong>内装仕上げだけでなく、構造的な強度にも注目してください。
          ブランズは清水建設によって建設され、耐震構造とプレミアム素材が全体に使用されています。
        </p>
        <p>
          <strong>3. ロケーションはどうですか？</strong>住所だけでなく、徒歩圏内の施設、交通アクセス、
          日用品への近接性を考慮してください。メガ・クニンガンは、ビジネスアクセスとライフスタイル施設の
          比類のない組み合わせを提供します。
        </p>
        <p>
          <strong>4. どのアメニティがあなたにとって重要ですか？</strong>プール、ジム、セキュリティ、
          コンシェルジュ——実際に使用するものを優先してください。ブランズのアメニティは、ショールーム的な
          魅力だけでなく、実際の日常生活のために設計されています。
        </p>
        <p>
          <strong>5. 長期的な価値はどうですか？</strong>再販可能性、賃貸需要、管理品質を考慮してください。
          適切なロケーションに建てられた、適切に管理されたアパートメントは、時間の経過とともに
          その価値をよりよく維持します。
        </p>
      `,
    },
  },
];

// ===================================================
// Render the current article page
// ===================================================

(function () {
  const body = document.body;
  const id = parseInt(body.dataset.articleId, 10);
  const lang = body.dataset.lang;

  const article = articleData.find((a) => a.id === id);
  if (!article) return;

  const img = document.getElementById("articleImage");
  if (img) {
    img.src = article.image;
    img.alt = article.titles[lang];
  }

  const titleEl = document.getElementById("articleTitle");
  if (titleEl) {
    titleEl.textContent = article.titles[lang];
  }

  const bodyEl = document.getElementById("articleBody");
  if (bodyEl) {
    bodyEl.innerHTML = article.contents[lang];
  }

  const otherLang = lang === "en" ? "ja" : "en";
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.href = `article-${otherLang}-${id}.html`;
    toggleBtn.textContent = otherLang === "en" ? "Read in English" : "日本語で読む";
  }
})();
