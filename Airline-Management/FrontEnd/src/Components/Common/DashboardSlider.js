import "./DashSlider.css";
const DashboardSlider = () => {
  return (
    <div class="slider w-full relative">
      {/* <div className="z-10 absolute text-3xl text-white top-5 left-[35%] mix-blend-difference">
        Welcome to Airline Dashboard.
      </div> */}
      <figure>
        <img alt="loading..." src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--eb45f7fe-8e08-4655-beed-d65782f86a78/1920x750_hero_a350.webp" />
        <img alt="loading..." src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--1dee98a1-3f00-4982-84ee-6e4917831158/1920x750_hero_digital_europe.webp" />
        <img alt="loading..." src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--51ec50b1-c6a5-43fe-9d4c-f0940912cc9d/1920x750_hero_40_partners-new.webp" />
        {/* <img src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--f5fc4490-e89d-4661-9469-3bf8981b97af/1920x750_hero_kochi_to_doha.webp"/> */}
      </figure>
    </div>
  );
};
export default DashboardSlider;
