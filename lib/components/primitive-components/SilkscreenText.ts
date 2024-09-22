import { PrimitiveComponent } from "../base-components/PrimitiveComponent"
import { silkscreenTextProps } from "@tscircuit/props"

export class SilkscreenText extends PrimitiveComponent<
  typeof silkscreenTextProps
> {
  doInitialPcbPrimitiveRender(): void {
    const { db } = this.root!
    const { _parsedProps: props } = this
    const container = this.getPrimitiveContainer()!

    const position = this._getGlobalPcbPositionBeforeLayout()

    // TODO handle layer flipping
    db.pcb_silkscreen_text.insert({
      anchor_alignment: props.anchorAlignment,
      anchor_position: {
        x: position.x,
        y: position.y,
      },
      font: props.font ?? "tscircuit2024",
      font_size: props.fontSize ?? 1,
      layer: "top",
      text: props.text ?? "",
      pcb_component_id: container.pcb_component_id!,
    })
  }
}
