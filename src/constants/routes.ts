const baseRoute = "/";
export const charactersListRote = baseRoute;

const detailRouteParams = ":characterId";
export const characterDetailRoute = `${charactersListRote}character/${detailRouteParams}`;

const createDetailRoute = (characterId: string) =>
  characterDetailRoute.replace(detailRouteParams, characterId);

export default createDetailRoute;
