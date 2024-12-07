function truncateDescription(description, limit = 100) {
  if (description.length > limit) {
    return description.substring(0, limit) + ' ...';
  }
  return description;
}

export { truncateDescription };
