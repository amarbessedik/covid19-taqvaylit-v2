import React from "react";

function Arabic({ arabic }) {
  return (
    <div style={{ display: arabic ? "block" : "none" }} className="arabic lang">
      <h4 style={{ color: "var(--charcoal)" }}>[ TAMAZIƔT AR TAƐRABT ]</h4>
      <br />
      <div>
        <p>TIGGTIN: K = 1000, M = 1000000</p>
        <ul>
          <li>
            AMḌFAR AGREƔLAN W ANFAFAD AMAYNUT N CURUNA (Yettwasnen s COVID-19) =
            المقتفي لأثر فيروس كورونا المستجد في العالم (SARS-CoV-2)
          </li>
          <li>TAGERTILT UMAḌAL = خريطة العالم</li>
          <li>TIGGTIN = الوحدات</li>
          <li>IRABULLEN = التقارير</li>
          <li>ISEFKA = البيانات</li>
          <li>ANFAFAD = فيروس</li>
          <li>UṬṬUNEN = الأرقام</li>
          <li>TIMẒṚIT = اللوحة</li>
          <li>ARNU ẒER = تعلم المزيد</li>
          <li>AKIT = مجموع</li>
          <li>UṬṬUNEN URMIDEN = الأعداد الفعلية</li>
          <li>ASEƔẒAN = البرمجيات</li>
          <li>UZDAY = رابط</li>
        </ul>
      </div> 
    </div>
  );
}

export default Arabic;
