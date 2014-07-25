var args = arguments[0] || {};

$.activity.set(args.data.attributes);
$.activity.set("totalRecords", "Total Records: " + args.data.attributes.dhsc.totalRecords);
$.activity.set("badAddress", "Bad Addresses: " + args.data.attributes.dhsc.badAddress);
$.activity.set("gradeNcoa", "Grade: " + args.data.attributes.dhsc.gradeNcoa);
$.parent = args.parentTab;