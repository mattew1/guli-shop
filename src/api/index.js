import Ajax from "@/ajax/Ajax";
import mockAjax from "@/ajax/mockAjax";

export const reqCategoryList = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

// 用于mock请求数据 banner数据
export const reqBannerList = () => {
  return mockAjax({ url: "/banner", method: "get" });
};
// 用于Mock 请求数据  floor数据
export const reqFloorList = () => {
  return mockAjax({ url: "/floor", method: "get" });
};

//对象是无序对象
export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: "/list",
    method: "get",
    params: searchParams,
  });
};
