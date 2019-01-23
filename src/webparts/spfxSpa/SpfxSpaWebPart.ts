import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxSpaWebPartStrings';
import MainNav from './components/main-nav';
import { ISpfxSpaProps } from './components/ISpfxSpaProps';

export interface ISpfxSpaWebPartProps {
  description: string;
}

export default class SpfxSpaWebPart extends BaseClientSideWebPart<ISpfxSpaWebPartProps> {

  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(
      MainNav,
      {
       
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
