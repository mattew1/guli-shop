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
