export const baseRoute = "/";

const charactersListParams = ":page";
export const charactersListRoute = `${baseRoute}${charactersListParams}`;
export const createListRoute = (page: number) =>
  charactersListRoute.replace(charactersListParams, page.toString());

const detailRouteParams = ":characterId";
export const characterDetailRoute = `${baseRoute}character/${detailRouteParams}`;
export const createDetailRoute = (characterId: string) =>
  characterDetailRoute.replace(detailRouteParams, characterId);
