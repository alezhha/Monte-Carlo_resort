import React from "react";
import { useTranslation } from "react-i18next";

const PNF = () => {
  const {t} = useTranslation()
  return (
    <div className="pnf">
      <h1>404</h1>
      <p>{t("pnfTitle")}</p>
      <div>{t("pnfText")} <a href="https://www.booking.com/hotel/kg/monte-carlo-resort.ru.html?aid=318615&label=Russian_Kyrgyzstan_RU_KG_29377900705-Y5WcO5K9hDaRERS4mwMJBQS217271526854%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666995%3Adsa-218233786105%3Alp1009828%3Ali%3Adec%3Adm&sid=bbdc9e965cec9a2a52c60271d3ab56cc&dest_id=-2331858;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1685794553;srpvid=2382563bd725006e;type=total;ucfs=1&#hotelTmpl">booking</a>.</div>
    </div>
  );
};

export default PNF;
