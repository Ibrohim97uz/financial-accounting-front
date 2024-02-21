function SvgIcon({ svg, ...props }: any) {
  return (
    <div {...props}>
      <img className="w-full h-full cursor-pointer" src={svg} />
    </div>
  );
}

export default SvgIcon;
