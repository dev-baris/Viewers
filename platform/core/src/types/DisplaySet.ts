import { InstanceMetadata } from './StudyMetadata';

export type DisplaySet = {
  displaySetInstanceUID: string;
  instances: InstanceMetadata[];
  isReconstructable?: boolean;
  StudyInstanceUID: string;
  SeriesInstanceUID?: string;
  SeriesNumber?: number;
  SeriesDescription?: string;
  numImages?: number;
  unsupported?: boolean;
  Modality?: string;
  imageIds?: string[];
  images?: unknown[];
  label?: string;
  /** Flag indicating if this is an overlay display set (e.g., SEG, RTSTRUCT) */
  isOverlayDisplaySet?: boolean;
  /** flag indicating if it supports window level */
  supportsWindowLevel?: boolean;

  // Details about how to display:
  /**
   *  A URL that can be used to display the thumbnail.  Typically a data url
   * This can be set to null to avoid trying to display a thumbnail, eg for
   * display sets without a thumbnail.
   */
  thumbnailSrc?: string;
  /** A fetch method to get the thumbnail */
  getThumbnailSrc?(imageId?: string): Promise<string>;

  /**
   * A fetch URL to display the content.  This is used for content such as
   * pdf display.
   */
  renderedUrl?: string;

  SeriesDate?: string;
  SeriesTime?: string;
  instance?: InstanceMetadata;
};

export type DisplaySetSeriesMetadataInvalidatedEvent = {
  displaySetInstanceUID: string;
  invalidateData: boolean;
};
