import type { SvgIconTypeMap } from "@mui/material"
import type { OverridableComponent } from "@mui/material/OverridableComponent"

export type MaterialIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string
    }