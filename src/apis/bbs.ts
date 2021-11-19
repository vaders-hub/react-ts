import apis from "../plugins/apis";

const onLoad = async (): Promise<any> => {
  const result = await apis({
    url: "/bbs/read",
    method: "get",
    data: {},
  });
  if (result) return result;
};

export { onLoad };
