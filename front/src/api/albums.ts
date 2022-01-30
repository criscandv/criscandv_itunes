import http from "../utils/http";

export const getAlbums = async (artist: string) => {
  let url = "/albums";
  if (artist) {
    url = `${url}?artist=${artist}`;
  }

  const response = await http.get(url);
  return response;
};
