import React, { Component } from 'react'
import { mergeStyles, Shimmer, ShimmerElementType } from '@fluentui/react'

const shimmerWrapperClass = mergeStyles({
    padding: 2,
    selectors: {
      '& > .ms-Shimmer-container': {
        margin: 10,
      },
    },
});

const shimmerWithElementFirstRow = [
    // { type: ShimmerElementType.circle },
    // { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line },
];
const shimmerWithElementSecondRow = [
    // { type: ShimmerElementType.circle, height: 24 },
    // { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    { type: ShimmerElementType.gap, width: '5%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    // { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16, width: '15%' },
    { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16 },
];
const shimmerWithElementThirdRow = [
    // { type: ShimmerElementType.circle, height: 24 },
    // { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    { type: ShimmerElementType.gap, width: '5%' },
    { type: ShimmerElementType.line, height: 16, width: '20%' },
    { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16, width: '15%' },
    { type: ShimmerElementType.gap, width: '10%' },
    { type: ShimmerElementType.line, height: 16 },
];


export default class CosnoteShimmer extends Component {
    render() {
        return (
            <div className="cosnoteShimmer">
                <div className={shimmerWrapperClass}>
                    <Shimmer shimmerElements={shimmerWithElementFirstRow} />
                    <Shimmer shimmerElements={shimmerWithElementSecondRow} />
                    <Shimmer width="70%" shimmerElements={shimmerWithElementThirdRow} />
                </div>
            </div>
        )
    }
}
