export const fetchSubjects = () => (
  $.ajax({
    method: 'GET',
    url: 'api/subjects'
  })
);
