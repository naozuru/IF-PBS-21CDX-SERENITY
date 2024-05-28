import "@/app/style/loading.css";

const Loading = () => {
  return (
    <div className="loader py-10">
      <div className="intern"></div>
      <div className="external-shadow">
        <div className="central"></div>
      </div>
    </div>
  );
};

export default Loading;
