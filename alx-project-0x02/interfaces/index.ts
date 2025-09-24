export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: Post) => void;
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
