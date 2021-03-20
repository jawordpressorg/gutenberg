/**
 * External dependencies
 */
import Clipboard from 'clipboard';

/**
 * WordPress dependencies
 */
import { useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import useRefEffect from '../use-ref-effect';

/** @typedef {import('@wordpress/element').RefObject} RefObject */

function useUpdatedRef( value ) {
	const ref = useRef( value );
	ref.current = value;
	return ref;
}

/**
 * Copies the given text to the clipboard when the element is clicked.
 *
 * @param {text|Function} text      The text to copy. Use a function if not
 *                                  already available and expensive to compute.
 * @param {Function}      onSuccess Called when to text is copied.
 *
 * @return {RefObject} A ref to assign to the target element.
 */
export default function useCopyToClipboard( text, onSuccess ) {
	// Store the dependencies as refs and continuesly update them so they're
	// fresh when the callback is called.
	const textRef = useUpdatedRef( text );
	const onSuccesRef = useUpdatedRef( onSuccess );
	return useRefEffect( ( node ) => {
		// Clipboard listens to click events.
		const clipboard = new Clipboard( node, {
			text() {
				return typeof textRef.current === 'function'
					? textRef.current()
					: textRef.current;
			},
		} );

		clipboard.on( 'success', ( { clearSelection } ) => {
			// Clearing selection will move focus back to the triggering
			// button, ensuring that it is not reset to the body, and
			// further that it is kept within the rendered node.
			clearSelection();
			// Handle ClipboardJS focus bug, see
			// https://github.com/zenorocha/clipboard.js/issues/680
			node.focus();

			if ( onSuccesRef.current ) {
				onSuccesRef.current();
			}
		} );

		return () => {
			clipboard.destroy();
		};
	}, [] );
}
