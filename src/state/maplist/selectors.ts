import { selector } from "recoil";
import { maplistState } from "./atoms";
import { getMazeList } from "@api/maze";

export const mapListSelector = selector({
    key: 'mapListSelector',
    get: async ({ get }) => {
        return await getMazeList()
    },
});