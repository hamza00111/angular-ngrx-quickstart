import { Widget } from '@workspace/common-data';
import { Action } from '@ngrx/store';

export enum WidgetsActionTypes {
  WidgetSelected = '[Widgets] Selected',
  LoadWidgets = '[Widgets] Load Data',
  WidgetsLoaded = '[Widgets] Data Loaded',
  AddWidget = '[Widgets] Add Data',
  WidgetAdded = '[Widgets] Data Added',
  UpdateWidget = '[Widgets] Update Data',
  DeleteWidget = '[Widgets] Delete Data'
}

export class SelectWidget implements Action {
  readonly type = WidgetsActionTypes.WidgetSelected;
  constructor(public payload) { }
}

export class LoadWidgets implements Action {
  readonly type = WidgetsActionTypes.LoadWidgets;
  constructor() {}
}

export class WidgetsLoaded implements Action {
  readonly type = WidgetsActionTypes.WidgetsLoaded;
  constructor(public payload: Widget[]) { }
}

export class AddWidget implements Action {
  readonly type = WidgetsActionTypes.AddWidget;
  constructor(public payload: Widget) { }
}

export class WidgetAdded implements Action {
  readonly type = WidgetsActionTypes.WidgetAdded;
  constructor(public payload: Widget) { }
}

export class UpdateWidget implements Action {
  readonly type = WidgetsActionTypes.UpdateWidget;
  constructor(public payload: Widget) { }
}

export class DeleteWidget implements Action {
  readonly type = WidgetsActionTypes.DeleteWidget;
  constructor(public payload: Widget) { }
}

export type WidgetsActions = SelectWidget
  | LoadWidgets
  | WidgetsLoaded
  | AddWidget
  | WidgetAdded
  | UpdateWidget
  | DeleteWidget;
