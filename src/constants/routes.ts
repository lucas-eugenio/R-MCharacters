interface RouteType {
  localPath: string;
  completeUrl: string;
}

const baseRoutePath = "/";
const baseRoute: RouteType = {
  localPath: baseRoutePath,
  completeUrl: baseRoutePath,
};
export const charactersListRote = baseRoute;

const characterDetailPath = "character/:id";
export const characterDetailRoute: RouteType = {
  localPath: characterDetailPath,
  completeUrl: `${characterDetailPath}${characterDetailPath}`,
};
