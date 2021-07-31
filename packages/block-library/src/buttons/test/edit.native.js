/**
 * External dependencies
 */
import {
	fireEvent,
	waitFor,
	getEditorHtml,
	within,
	initializeEditor,
} from 'test/helpers';

/**
 * WordPress dependencies
 */
import { getBlockTypes, unregisterBlockType } from '@wordpress/blocks';
import { registerCoreBlocks } from '@wordpress/block-library';

beforeAll( () => {
	// Register all core blocks
	registerCoreBlocks();
} );

afterAll( () => {
	// Clean up registered blocks
	getBlockTypes().forEach( ( block ) => {
		unregisterBlockType( block.name );
	} );
} );

describe( 'when a button is shown', () => {
	it( 'adjusts the border radius', async () => {
		const initialHtml = `<!-- wp:buttons -->
		<div class="wp-block-buttons"><!-- wp:button {"style":{"border":{"radius":"5px"}}} -->
		<div class="wp-block-button"><a class="wp-block-button__link" style="border-radius:5px" >Hello</a></div>
		<!-- /wp:button --></div>
		<!-- /wp:buttons -->`;
		const { getByA11yLabel } = await initializeEditor( {
			initialHtml,
		} );

		const buttonsBlock = await waitFor( () =>
			getByA11yLabel( /Buttons Block\. Row 1/ )
		);
		fireEvent.press( buttonsBlock );

		// onLayout event has to be explicitly dispatched in BlockList component,
		// otherwise the inner blocks are not rendered.
		const innerBlockListWrapper = await waitFor( () =>
			within( buttonsBlock ).getByTestId( 'block-list-wrapper' )
		);
		fireEvent( innerBlockListWrapper, 'layout', {
			nativeEvent: {
				layout: {
					width: 100,
				},
			},
		} );

		const buttonInnerBlock = await waitFor( () =>
			within( buttonsBlock ).getByA11yLabel( /Button Block\. Row 1/ )
		);
		fireEvent.press( buttonInnerBlock );

		const settingsButton = await waitFor( () =>
			getByA11yLabel( 'Open Settings' )
		);
		fireEvent.press( settingsButton );

		const radiusStepper = await waitFor( () =>
			getByA11yLabel( /Border Radius/ )
		);

		const incrementButton = await waitFor( () =>
			within( radiusStepper ).getByTestId( 'Increment' )
		);
		fireEvent( incrementButton, 'onPressIn' );

		const expectedHtml = `<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"border":{"radius":"6px"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link" href="" style="border-radius:6px">Hello</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->`;
		expect( getEditorHtml() ).toBe( expectedHtml );
	} );
} );
