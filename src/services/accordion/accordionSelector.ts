import { RootState } from "../../app/store";

export const selectActiveAccordion = (state: RootState, id: number) =>
  state.accordion.activeId.includes(id);
