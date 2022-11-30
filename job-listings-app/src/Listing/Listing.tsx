import style from "./Listing.module.css";
import { ListingProps } from "../types";

export const Listing = ({ data, stateChanger }: ListingProps) => {
  return (
    <div
      className={
        data.featured
          ? `${style.Container} ${style.FeaturedUtil}`
          : style.Container
      }
    >
      <img className={style.Logo} src={data.logo} alt="" />
      <div className={style.Content}>
        <div className={style.TopInfo}>
          <h3 className={style.Company}>{data.company}</h3>
          <div className={style.Tags}>
            {data.new ? <p className={style.New}>NEW!</p> : ""}
            {data.featured ? <p className={style.Featured}>Featured</p> : ""}
          </div>
        </div>
        <h3 className={style.Position}>{data.position}</h3>
        <div className={style.Info}>
          <p className={style.PostedAt}>{data.postedAt}</p>•
          <p className={style.Contract}>{data.contract}</p>•
          <p className={style.Location}>{data.location}</p>
        </div>
      </div>
      <div className={style.Filters}>
        {data.languages.map((lang: string) => (
          <p
            key={`${data.id} ${lang}`}
            className={style.Language}
            onClick={() => stateChanger(lang)}
          >
            {lang}
          </p>
        ))}
        {data.tools.map((tool: string) => (
          <p
            key={`${data.id} ${tool}`}
            className={style.Tool}
            onClick={() => stateChanger(tool)}
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
};
