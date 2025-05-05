const Title = ({
  title,
  subTitle,
  align,
  font,
  className = "",
  titleClass = "",
  subTitleClass = "",
}) => {
  return (
    <div
      className={`md:w-2xl text-center flex flex-col justify-center items-center gap-2 
        ${align === "left" ? "md:items-start md:text-left" : ""} ${className}`}
    >
      <h1
        className={`text-4xl md:text-[40px] ${
          font || "font-playfair"
        } ${titleClass}`}
      >
        {title}
      </h1>
      <p className={subTitleClass}>{subTitle}</p>
    </div>
  );
};

export default Title;
