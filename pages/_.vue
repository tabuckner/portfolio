<script>
// Redirects users to the Home route.
// NOTE: Currently using JS to avoid a TS error related to asyncData.
export default {
  asyncData({ redirect }) {
    return redirect('/');
  }
};
</script>
