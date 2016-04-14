/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {events} from 'camelot-unchained';

import {BuildingToggle} from './components/building-toggle';

events.on('init', () => ReactDom.render(<BuildingToggle/>, document.getElementById("cse-ui-building")));
