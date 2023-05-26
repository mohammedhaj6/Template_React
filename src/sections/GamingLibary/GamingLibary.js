import "./GamingLibary.css";

import {
  GamingLibaryCard,
  SectionHeader,
  SectionWrapper,
} from "../../components/index";
import GamingLibaryData from "../../Data/GamingLibaryData";
const GamingLibary = () => {
  const cards = GamingLibaryData.map((card) => {
    return (
      <GamingLibaryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        date_added={card.date_added}
        hoursPlayed={card.hours_played}
        downloaded={card.downloaded}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Libary</SectionHeader>
        <div className="gaming-libary-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default GamingLibary;
