import { ITool } from "@/helpers/api.interfaces";
import { HTMLAttributes } from "react";

export interface ToolCardProps extends HTMLAttributes<HTMLDivElement> {
    catId: string,
    tool: ITool
}