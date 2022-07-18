// Copyright 2022 Glowstik Inc. All rights reserved.
import {useState, useEffect, useRef} from 'react' //React hooks

// import iNoBounce from 'inobounce'

import {gsap} from 'gsap' //https://greensock.com/docs/


function FakeDiv() {

	// iNoBounce.enable()
	//Constant to hold footer height integer
	const footerHeight = 44

	//State for keeping the visualViewport height from their api
	const [vvHeight, setVVHeight] = useState(window.visualViewport.height)

	const [viewportInnerHeight, setViewportInnerHeight] = useState(window.innerHeight)

	const [viewportOuterHeight, setViewportOuterHeight] = useState(window.outerHeight)

	//State for keeping the visualViewport width from their api
	const [vvWidth, setVVWidth] = useState(window.visualViewport.width)

	const [viewportInnerWidth, setViewportInnerWidth] = useState(window.innerWidth)

	//Reference for the footer
	const footerRef = useRef(null)

	//Reference for the input
	const inputRef = useRef(null)

	//useEffect hook for the gsap animation
	useEffect(() => {
		const resizeVV = ({current}, newHeight) => {
			gsap.set(current, {display: 'block'})
			//gsap timeline
			gsap.to(current, {
				top: document.activeElement.id === 'inputTrigger' ? newHeight : '100vh',
				duration: document.activeElement.id === 'inputTrigger' ? .35 : 0,
				ease: 'elastic.out(.5, 0.5)',
			})
		}

		//Event handling
		const footerEx = () => {
			resizeVV(footerRef, visualViewport.height - footerHeight)
			setVVHeight(visualViewport.height)
			// setFakeDivTopVal(visualViewport.height - footerHeight)
		}

		window.visualViewport.addEventListener('resize', footerEx)
	}, [])

	return (
		//Keeping the height of the container div to be the height of the visualViewport
		<div style={{
			height: visualViewport.height,
			width: vvWidth,
			backgroundColor: 'lightgray'
		}}
		>
			<div style={{
				width: '100vw',
				height: '100vh',
				overflow: 'scroll',
				WebkitOverflowScrolling: 'touch'
			}}>
				<div style={{
					position: 'relative',
					display: 'block',
					fontSize: 'small'
				}}>
					Height px Ext/VVP/VH: {viewportOuterHeight - viewportInnerHeight}/{viewportInnerHeight}/{viewportOuterHeight}
					
				</div>
				{/* The input where events viewport event get triggered */}
				<input
					ref={inputRef}
					id='inputTrigger'
					placeholder='Input...'
					onBlur={() => {
						console.log(footerRef)
						footerRef.current.style.display = 'none'
					}}
					// onFocus={}
					style={{marginTop: 20}}
				/>
				{/* Paragraph of lorem ipsum filler text */}
				<p style={{
					width: '100%',
					fontSize: 20
				}}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac bibendum purus. Fusce laoreet risus non erat aliquam, vitae pellentesque odio dignissim. Suspendisse laoreet porttitor finibus. Sed dignissim volutpat lacus, nec gravida est porta in. Nunc mollis, nisi eu efficitur imperdiet, lorem magna mattis turpis, vel tempus nisi lacus vel augue. Suspendisse dui nisi, aliquet ac lacus facilisis, feugiat mollis dolor. Aenean tincidunt aliquam erat, vestibulum porta mauris auctor sed. Sed varius lobortis urna in cursus. Nulla facilisi. Morbi bibendum sagittis lacus.

	Pellentesque ornare leo at fringilla lacinia. Mauris tincidunt gravida neque et semper. Morbi id luctus arcu, vel dignissim mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta magna vel vulputate scelerisque. Maecenas gravida mattis vestibulum. Nulla in dignissim eros, in placerat velit. Pellentesque et justo et sapien lacinia maximus vel eu tellus. Curabitur sed urna magna. Vestibulum non vulputate quam. Cras eget enim nisi. Aliquam convallis, dui ultricies hendrerit gravida, velit mauris eleifend tortor, et maximus nisi quam commodo libero. Praesent sodales, quam eget feugiat convallis, tortor leo auctor quam, a feugiat sem sem quis urna. Integer non odio euismod, venenatis lorem aliquam, varius orci.

	Suspendisse volutpat vel mi vitae cursus. Proin placerat est ac euismod consequat. Ut hendrerit lorem sapien, sit amet pretium turpis elementum eu. Nulla convallis enim sed nulla dapibus condimentum. In libero augue, iaculis suscipit rutrum vel, dignissim sit amet nisi. Vestibulum pellentesque, ex et semper sodales, ipsum enim scelerisque diam, et congue lacus erat nec lectus. In interdum cursus nisl. Suspendisse mollis vel quam a rutrum. Phasellus pellentesque elementum erat, et gravida sapien laoreet in. Phasellus vulputate dui ac quam auctor, porttitor dictum mauris consectetur.

	Donec non enim ligula. Aenean dapibus hendrerit metus ornare condimentum. In pulvinar, magna quis rhoncus aliquam, erat diam interdum tortor, ut blandit eros ante aliquam tellus. Vestibulum pellentesque est ut erat malesuada rhoncus. Praesent luctus nibh at sagittis vestibulum. In hac habitasse platea dictumst. Integer sed rhoncus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim fringilla enim sit amet posuere. Donec ut consequat lectus. Nam tempor sem consequat turpis lobortis dictum. Vestibulum laoreet mollis rutrum. Nam tellus mauris, consectetur nec urna quis, hendrerit aliquet leo. Quisque dignissim varius augue.

	Nunc dui quam, egestas quis massa cursus, hendrerit condimentum ante. Phasellus suscipit vulputate lectus, nec pulvinar sem ultrices sit amet. Phasellus ut euismod tortor, et pulvinar diam. Morbi sed condimentum ante. Sed posuere ornare erat sit amet sagittis. Donec sed urna pellentesque, elementum urna sed, condimentum ligula. Nullam porttitor vel tellus eu suscipit. Integer a turpis ut augue vehicula scelerisque. Nam ac urna nulla. Vestibulum lacus magna, gravida dapibus lobortis eu, porta eu sem.
				</p>
			</div>
			{/* Animated footer handled by the gsap functionality defined above */}
			<div
				ref={footerRef}
				style={{
					height: footerHeight * 1.5,
					width: '100%',
					position: 'absolute',
					top: '100vh',
					zIndex: '1',
					backgroundColor: '#ED2290',
					touchAction: 'none'
				}}
			>
			</div>
		</div>
	)
}

export default FakeDiv