import React, { useState } from "react";
import StarIcon from "../../assets/icon-star.svg";
import ResultImage from "../../assets/illustration-thank-you.svg";

interface Props {}

const styles = {
  container:
    "custom-gradient rounded-[15px] sm:rounded-[30px] p-[24px] sm:px-6 max-w-[412px]",
  iconWrapper:
    "rounded-[50%] w-12 h-12 grid place-items-center bg-[#262E38] mb-[16px] sm:mb-[30px]",
  title: "font-bold text-white text-[28px] leading-9 mb-[10px] sm:mb-[7px]",
  description: "text-[#969FAD] text-[15px] leading-6 mb-[24px]",
  ratingWrapper: "flex justify-between mb-[24px] sm:mb-[32px]",
  ratingButton:
    "rounded-[50%] h-[42px] w-[42px] sm:h-[51px] sm:w-[51px] flex items-center justify-center cursor-pointer text-[16px] hover:bg-[#7C8798] hover:text-white",
  ratingButtonTxt: "font-bold",
  submitButton:
    "bg-[#FC7614] text-center font-bold text-[15px] text-white w-full py-[11px] rounded-[23px] font-overpass tracking-[2px] hover:bg-white hover:text-[#FC7614]",
  resultImageWrapper:
    "mb-[24px] sm:mb-[32px] h-[96px] sm:h-[108px] w-[144px] sm:w-[162px]",
  resultTitle: "text-[#FC7614] mb-[24px] sm:mb-[32px] text-[14px] leading-6",
  resultDescription:
    "text-[24px] font-bold leading-7 mb-[10px] sm:mb-[7px] text-white",
  resultFooter:
    "text-[#969FAD] text-[15px] font-overpass py-[12px] text-center",
};

const InteractiveRating: React.FunctionComponent<Props> = ({}) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [display, setDisplay] = useState<"rating" | "result">("rating");
  return (
    <div className={styles.container}>
      {display === "rating" && (
        <>
          <div className={styles.iconWrapper}>
            <img src={StarIcon} alt="StarIcon" />
          </div>
          <div className={styles.title}>How did we do?</div>
          <div className={styles.description}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </div>
          <div className={styles.ratingWrapper}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                className={`${styles.ratingButton} ${
                  selectedItem === item
                    ? "bg-[#FC7614] text-white"
                    : "bg-[#262E38] text-[#7C8798]"
                }`}
                key={item}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.ratingButtonTxt}>{item}</div>
              </div>
            ))}
          </div>
          <button
            className={styles.submitButton}
            onClick={() => setDisplay("result")}
          >
            SUBMIT
          </button>
        </>
      )}
      {display === "result" && (
        <>
          <div className="flex flex-col items-center">
            <div className={styles.resultImageWrapper}>
              <img src={ResultImage} alt="thank you" />
            </div>
            <div className={styles.resultTitle}>
              You selected {selectedItem} out of 5
            </div>
            <div className={styles.resultDescription}>Thank you!</div>
            <div className={styles.resultFooter}>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InteractiveRating;
