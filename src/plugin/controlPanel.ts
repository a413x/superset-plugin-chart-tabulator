/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t, validateNonEmpty } from '@superset-ui/core';
import {
  ControlPanelConfig,
  sections,
  sharedControls,
} from '@superset-ui/chart-controls';

const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'cols',
            config: {
              ...sharedControls.groupby,
              label: t('Columns'),
              description: t('Columns to group by'),
            },
          },
        ],
        [
          {
            name: 'metrics',
            config: {
              ...sharedControls.metrics,
              // it's possible to add validators to controls if
              // certain selections/types need to be enforced
              validators: [validateNonEmpty],
            },
          },
        ],
        ['adhoc_filters'],
        [
          {
            name: 'row_limit',
            config: sharedControls.row_limit,
          },
        ],
      ],
    },
    {
      label: t('Tabulator config'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'header_filter',
            config: {
              type: 'CheckboxControl',
              label: t('Add header filter'),
              renderTrigger: true,
              default: true,
              description: t(
                'Add header filter to columns',
              ),
            },
          },
        ],
      ],
    },
  ],
};

export default config;
