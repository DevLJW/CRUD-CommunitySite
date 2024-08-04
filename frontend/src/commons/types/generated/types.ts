export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IAccessToken = {
  __typename?: 'AccessToken';
  accesstoken: Scalars['String'];
};

export type ICreateFreeBoardCommentInput = {
  content: Scalars['String'];
  writer: Scalars['String'];
};

export type ICreateFreeBoardInput = {
  FileUrls?: InputMaybe<Array<Scalars['String']>>;
  content: Scalars['String'];
  password: Scalars['String'];
  title: Scalars['String'];
  writer: Scalars['String'];
};

export type ICreateProductInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['String'];
  productSaleslocation: IProductSaleslocationInput;
  productTags: Array<Scalars['String']>;
};

export type IFreeBoard = {
  __typename?: 'FreeBoard';
  FileUrls?: Maybe<Array<Scalars['String']>>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  number: Scalars['Int'];
  password: Scalars['String'];
  title: Scalars['String'];
  user: IUser;
  views: Scalars['String'];
  writer: Scalars['String'];
};

export type IFreeBoardComment = {
  __typename?: 'FreeBoardComment';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  number: Scalars['Int'];
  user: IUser;
  writer: Scalars['String'];
};

export type IMessage = {
  __typename?: 'Message';
  message: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  CreateFreeBoard: IFreeBoard;
  CreateFreeBoardComment: IFreeBoardComment;
  FreeBoardCommentDelete: Scalars['String'];
  UpdateFreeBoard: IFreeBoard;
  UpdateFreeBoardComment: IFreeBoardComment;
  Views: Scalars['Int'];
  createProduct: IProduct;
  createProductCategory: IProductCategory;
  createProductSubCategory: IProductSubCategory;
  createUser: IUser;
  deleteProduct: Scalars['Boolean'];
  login: IAccessToken;
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  updateProduct: IProduct;
  uploadFile: Scalars['String'];
};


export type IMutationCreateFreeBoardArgs = {
  createFreeBoardInput: ICreateFreeBoardInput;
};


export type IMutationCreateFreeBoardCommentArgs = {
  BoardId: Scalars['Int'];
  createFreeBoardComment: ICreateFreeBoardCommentInput;
};


export type IMutationFreeBoardCommentDeleteArgs = {
  BoardCommentId: Scalars['Int'];
};


export type IMutationUpdateFreeBoardArgs = {
  BoardId: Scalars['Int'];
  updateFreeBoardInput: IUpdateFreeBoardInput;
};


export type IMutationUpdateFreeBoardCommentArgs = {
  BoardCommentId: Scalars['Int'];
  updateFreeBoardCommentInput: IUpdateFreeBoardCommentInput;
};


export type IMutationViewsArgs = {
  BoardId: Scalars['Int'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateProductCategoryArgs = {
  name: Scalars['String'];
};


export type IMutationCreateProductSubCategoryArgs = {
  maincategoryname: Scalars['String'];
  subcategoryname: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  cellphone: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateProductArgs = {
  productId: Scalars['String'];
  updateProductInput: IUpdateProductInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type IProduct = {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['String'];
  isSoldout: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategory: IProductCategory;
  productSaleslocation: IProductSaleslocation;
  productTags: Array<IProductTag>;
  user: IUser;
};

export type IProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IProductSaleslocation = {
  __typename?: 'ProductSaleslocation';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  meetingTime: Scalars['DateTime'];
};

export type IProductSaleslocationInput = {
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  meetingTime: Scalars['DateTime'];
};

export type IProductSubCategory = {
  __typename?: 'ProductSubCategory';
  id: Scalars['String'];
  name: Scalars['String'];
  productCategory: IProductCategory;
};

export type IProductTag = {
  __typename?: 'ProductTag';
  id: Scalars['String'];
  name: Scalars['String'];
  products: Array<IProduct>;
};

export type IQuery = {
  __typename?: 'Query';
  EmailValidateCheck: IMessage;
  FetchFreeBoard: IFreeBoard;
  FetchFreeBoardCommentCount: Scalars['Int'];
  FetchFreeBoards: Array<IFreeBoard>;
  FetchFreeBoardsComments: Array<IFreeBoardComment>;
  FetchFreeBoardsCounts: Scalars['Int'];
  NickNameValidateCheck: IMessage;
  SMSSendMessage: ISendMessage;
  fetchProduct: IProduct;
  fetchProductCategory: Array<IProductCategory>;
  fetchProductSubCategory: Array<IProductSubCategory>;
  fetchProducts: Array<IProduct>;
  fetchUser: IUser;
};


export type IQueryEmailValidateCheckArgs = {
  email: Scalars['String'];
};


export type IQueryFetchFreeBoardArgs = {
  number: Scalars['Int'];
};


export type IQueryFetchFreeBoardCommentCountArgs = {
  BoardId?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchFreeBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchFreeBoardsCommentsArgs = {
  BoardId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryNickNameValidateCheckArgs = {
  nickname: Scalars['String'];
};


export type IQuerySmsSendMessageArgs = {
  phonenumber: Scalars['String'];
};


export type IQueryFetchProductArgs = {
  productId: Scalars['String'];
};

export type ISendMessage = {
  __typename?: 'SendMessage';
  accountId: Scalars['String'];
  country: Scalars['String'];
  from: Scalars['String'];
  groupId: Scalars['String'];
  messageId: Scalars['String'];
  statusCode: Scalars['String'];
  statusMessage: Scalars['String'];
  to: Scalars['String'];
  type: Scalars['String'];
};

export type IUpdateFreeBoardCommentInput = {
  content: Scalars['String'];
};

export type IUpdateFreeBoardInput = {
  FileUrls?: InputMaybe<Array<Scalars['String']>>;
  content: Scalars['String'];
  password: Scalars['String'];
  title: Scalars['String'];
  writer: Scalars['String'];
};

export type IUpdateProductInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productCategoryId?: InputMaybe<Scalars['String']>;
  productSaleslocation?: InputMaybe<IProductSaleslocationInput>;
  productTags?: InputMaybe<Array<Scalars['String']>>;
};

export type IUser = {
  __typename?: 'User';
  cellphone: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
};
