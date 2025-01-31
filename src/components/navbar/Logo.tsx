const Logo = () => {
  return (
    <div className="text-xl font-bold">
      <svg
        width="158"
        height="48"
        viewBox="0 0 158 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="157.5" height="48" fill="url(#pattern0_108_148)" />
        <defs>
          <pattern
            id="pattern0_108_148"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_108_148"
              transform="scale(0.0031746 0.0104167)"
            />
          </pattern>
          <image
            id="image0_108_148"
            width="315"
            height="96"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
