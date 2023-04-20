import { div } from "@mui/material";

const Shimmer = () => {
  return (
    <>
      <div className="resturantList" sx={{ marginTop: "78px" }}>
        {Array(10)
          .fill("")
          .map((e, i) => {
            return (
              <div className="shimmer-card" key={i}>
                <div className="shimmer-image"></div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
