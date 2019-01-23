import * as React from 'react';
import styles from './SpfxSpa.module.scss';
import { ISpfxSpaProps } from './ISpfxSpaProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxSpa extends React.Component<ISpfxSpaProps, {}> {
  public render(): React.ReactElement<ISpfxSpaProps> {
    return (
      <div className={ styles.spfxSpa }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
