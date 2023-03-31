const Background = () => {
  return (
    <section>
      <div className="-z-20 fixed w-full h-full blur-[200px]">
        <div className="-z-30 absolute rounded-lg  w-[600px] h-[600px] bg-violet-900" />
        <div className="-z-30 absolute rounded-lg right-0 bottom-0 w-[500px] h-[500px] bg-sky-900" />
      </div>
    </section>
  );
};

export default Background;
