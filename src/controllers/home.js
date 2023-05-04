const db = require("../config/db");

exports.getHomePageData = async (req, res) => {
  try {
    const lang = req.query.lang;
    const [resultlang, metadatalang] = await db.sequelize.query("select * from tb_language where url_string = ?",{
        type: db.sequelize.QueryTypes.SELECT,
        replacements: [lang],
      });

    const languageId = resultlang.id;

    const banners = await db.sequelize.query("select * from tb_home_page_content where home_section_id =1 and status = 1 and language_id = ?", {
        type: db.sequelize.QueryTypes.SELECT,
        replacements: [languageId],
      });
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
};
